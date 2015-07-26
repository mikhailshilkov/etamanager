using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.SignalR.Infrastructure;
using TripManager.Hubs;
using TripManager.Model;

namespace TripManager.Controllers
{
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
            return new[]
            {
                new Trip("HDC1001", "HDC", "BRU", "NINATRANS", "NOGPS_Nina", string.Empty, "08:00", "NA"),
                new Trip("UKA0096", "EMA", "LHR", "DHL ECO GB", "LS14 HLK", "25/07/2015 01:36:11", "03:00", "-01:23"),
                new Trip("UKA0021", "EMA", "LHR", "DHL ECO GB", "FL62 ZWB", "25/07/2015 02:04:12", "03:00", "-00:55")
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
