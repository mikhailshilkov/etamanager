using System;
using System.Net;
using RestSharp;

namespace MessageEmulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new RestClient("http://localhost:54640/api");
            var request = new RestRequest("event", Method.POST);
            request.AddParameter("TripCode", "UKA0021");
            request.AddParameter("Latitude", "55");
            request.AddParameter("Longitude", "5");
            request.AddParameter("DT", DateTime.Now.ToString());

            // execute the request
            var response = client.Execute(request);
            var content = response.Content;
            Console.WriteLine(content);
            Console.ReadKey();
        }
    }
}
