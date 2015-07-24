using System.Collections.Generic;
using Microsoft.AspNet.Mvc;

namespace TripManager.Controllers
{
    [Route("api/[controller]")]
    public class TripController : Controller
    {
        // GET: api/trips
        [HttpGet]
        public IEnumerable<Trip> Get()
        {
            return new[] { new Trip("ABC01"), new Trip("EDF02") };
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

    public class Trip
    {
        public Trip(string code)
        {
            this.Code = code;
        }

        public string Code { get;  }
    }
}
