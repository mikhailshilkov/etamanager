using System;
using System.Collections.Generic;
using System.Reflection;
using System.Runtime.Serialization;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.AspNet.SignalR.Json;
using Microsoft.ServiceBus;
using Microsoft.ServiceBus.Messaging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using TripManager.Helpers;
using TripManager.Hubs;
using TripManager.Model;

namespace TripManager.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly IHubContext tripsHub;

        public EventController(IConnectionManager connectionManager)
        {
            this.tripsHub = connectionManager.GetHubContext<TripsHub>();
        }

        // GET: api/trips
        [HttpGet]
        public string Get()
        {
            var update = new ETAUpdate { code = "UKA0096", expectedArrival = DateTime.Now.ToString() };
            QueueUtility.Send("ETAUpdateQueue", update);
            //this.tripsHub.Clients.All.addNewMessageToPage(update);
            return "posted ETA " + update.expectedArrival;
        }

        [HttpPost]
        public string Post(Position position)
        {
            QueueUtility.Send("PositionQueue", position);
            return "posted position " + position.DT;
        }

        [DataContract]
        public class ETAUpdate
        {
            [DataMember]
            public string code { get; set; }

            [DataMember]
            public string expectedArrival { get; set; }
        }


        [DataContract]
        public class Position
        {
            [DataMember]
            public string TripCode { get; set; }
            [DataMember]
            public double Latitude { get; set; }
            [DataMember]
            public double Longitude { get; set; }
            [DataMember]
            public string DT { get; set; }
        }
    }
}
