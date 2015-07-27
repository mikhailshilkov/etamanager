using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.SignalR.Infrastructure;
using TripManager.Hubs;
using TripManager.Model;

namespace TripManager.Controllers
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.Azure.Documents.Client;
    using Microsoft.Azure.Documents.Linq;

    [Route("api/[controller]")]
    public class TripController : Controller
    {
        public TripController(IConnectionManager connectionManager)
        {
            MessageProcessor.Ensure(connectionManager);
        }

        // GET: api/trips
        [HttpGet]
        public IEnumerable<Trip> Get()
        {
            var client = new DocumentClient(new Uri("https://etamanager.documents.azure.com:443/"), "HIgfJLkqRsemDoAv62MSn0/UFK2dC9RxtAopuV3rAa7f1tCqou/A2xbh1ShLDkKDaWOPLEsZ0sl7dGzjrEz36A==");
            return client.CreateDocumentQuery<Trip>("dbs/-gIgAA==/colls/-gIgALa0OwA=");

            //await client.CreateDocumentAsync("dbs/-gIgAA==/colls/-gIgALa0OwA=", new Trip("UKA0021", "EMA", "LHR", "DHL ECO GB", "FL62 ZWB", "25/07/2015 02:04:12", "03:00", "-00:55"));
            //return new[]
            //{
            //    new Trip("HDC1001", "HDC", "BRU", "NINATRANS", "NOGPS_Nina", string.Empty, "08:00", "NA"),
            //    new Trip("UKA0096", "EMA", "LHR", "DHL ECO GB", "LS14 HLK", "25/07/2015 01:36:11", "03:00", "-01:23"),
            //    new Trip("UKA0021", "EMA", "LHR", "DHL ECO GB", "FL62 ZWB", "25/07/2015 02:04:12", "03:00", "-00:55")
            //};
        }

        // GET api/trips/ABC01
        [HttpGet("{code}")]
        public Trip Get(string code)
        {
            var client = new DocumentClient(new Uri("https://etamanager.documents.azure.com:443/"), "HIgfJLkqRsemDoAv62MSn0/UFK2dC9RxtAopuV3rAa7f1tCqou/A2xbh1ShLDkKDaWOPLEsZ0sl7dGzjrEz36A==");
            return client.CreateDocumentQuery<Trip>("dbs/-gIgAA==/colls/-gIgALa0OwA=").Where(t => t.Code == code).AsEnumerable().FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
