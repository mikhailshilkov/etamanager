using System;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.ServiceBus.Messaging;
using TripManager.Controllers;
using TripManager.Helpers;

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
            QueueUtility.Listen<EventController.Position>("PositionQueue", position =>
            {
                var update = new EventController.ETAUpdate { code = position.TripCode, expectedArrival = position.DT };
                QueueUtility.Send("ETAUpdateQueue", update);
            });
            QueueUtility.Listen<EventController.ETAUpdate>("ETAUpdateQueue", update => this.tripsHub.Clients.All.addNewMessageToPage(update));
        }
    }
}
