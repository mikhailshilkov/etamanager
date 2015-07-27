namespace TripManager.Model
{
    public class Trip
    {
        public Trip(string code, string origin, string destination, string @operator,
            string licensePlate, string expectedArrival, string plannedArrival, string arrivalDifference)
        {
            this.Code = code;
            this.Origin = origin;
            this.Destination = destination;
            this.Operator = @operator;
            this.LicensePlate = licensePlate;
            this.ExpectedArrival = expectedArrival;
            this.PlannedArrival = plannedArrival;
            this.ArrivalDifference = arrivalDifference;
        }

        public string Code { get; }

        public string Origin { get; }

        public string Destination { get; }

        public string Operator { get; }

        public string LicensePlate { get; }

        public string ExpectedArrival { get; }

        public string PlannedArrival { get; }

        public string ArrivalDifference { get; }
    }
}