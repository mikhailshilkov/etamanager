using System;
using System.Linq;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.ServiceBus.Messaging;
using TripManager.Controllers;
using TripManager.Helpers;
using TripManager.Model;

namespace TripManager.Hubs
{
    public class MessageProcessor
    {
        private static MessageProcessor instance;
        private readonly IHubContext tripsHub;

        public static void Ensure(IConnectionManager connectionManager)
        {
            if (instance == null)
            {
                instance = new MessageProcessor(connectionManager);
                instance.Start();
            }
        }

        public MessageProcessor(IConnectionManager connectionManager)
        {
            this.tripsHub = connectionManager.GetHubContext<TripsHub>();
        }

        public void Start()
        {
            QueueUtility.Listen<EventController.Position>("PositionQueue", async position =>
            {
                var client = new DocumentClient(new Uri("https://etamanager.documents.azure.com:443/"), "HIgfJLkqRsemDoAv62MSn0/UFK2dC9RxtAopuV3rAa7f1tCqou/A2xbh1ShLDkKDaWOPLEsZ0sl7dGzjrEz36A==");
                var trip = client.CreateDocumentQuery<TripDocument>("dbs/-gIgAA==/colls/-gIgALa0OwA=").Where(t => t.Code == position.TripCode).AsEnumerable().FirstOrDefault();
                if (trip != null)
                {
                    trip.ExpectedArrival = position.DT;
                    await client.ReplaceDocumentAsync(trip.SelfLink, trip);
                }

                var update = new EventController.ETAUpdate { code = position.TripCode, expectedArrival = position.DT };
                QueueUtility.Send("ETAUpdateQueue", update);
            });
            QueueUtility.Listen<EventController.ETAUpdate>("ETAUpdateQueue", update => this.tripsHub.Clients.All.addNewMessageToPage(update));
        }
    }

    public class TripDocument : Document
    {
        public string Code { get; set; }

        public string Origin { get; set; }

        public string Destination { get; set; }

        public string Operator { get; set; }

        public string LicensePlate { get; set; }

        public string ExpectedArrival
        {
            get
            {
                return this.GetPropertyValue<string>("ExpectedArrival");
            }

            set
            {
                this.SetPropertyValue("ExpectedArrival", value);
            }
        }

        public string PlannedArrival { get; set; }

        public string ArrivalDifference { get; set; }
    }
}
