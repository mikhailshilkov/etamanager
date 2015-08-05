using System;
using System.Threading;
using RestSharp;

namespace MessageEmulator
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = "http://localhost:54640/api";
            //string url = "http://etamanager.azurewebsites.com/api";
            var client = new RestClient(url);
            var r = new Random();
            var tripCodes = new[] { "UKA0021", "HDC1001", "UKA0096", "AMS1006", "EAT0002", "LEJ2467", "DD2P16C", "DD515CA", "BRU2736" };
            while (true)
            {
                var request = new RestRequest("event", Method.POST);
                request.AddParameter("TripCode", tripCodes[r.Next(9)]);
                request.AddParameter("Latitude", "55");
                request.AddParameter("Longitude", "5");
                request.AddParameter("DT", DateTime.Now.ToString());

                // execute the request
                var response = client.Execute(request);
                var content = response.Content;
                Console.WriteLine(content);
                Thread.Sleep(1500);
            }
            //Console.ReadKey();
        }
    }
}
