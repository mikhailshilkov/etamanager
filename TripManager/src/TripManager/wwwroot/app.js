import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class App {
    constructor(httpClient) {
        this.http = httpClient;
    }

    activate() {
        $.connection.hub.logging = true;
        this.hub = $.connection.tripsHub;
        var self = this;
        this.hub.client.addNewMessageToPage =
            msg => {
                self.trips.filter(t => t.code == msg.code).forEach(t => t.expectedArrival = msg.expectedArrival);
            };
        $.connection.hub.start();
        return this.http.get("api/trip").then(r => this.trips = r.content);
    }
}