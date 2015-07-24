import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class App {
    constructor(httpClient) {
        this.http = httpClient;
    }

    activate() {
        return this.http.get("api/trip").then(r => this.trips = r.content);
    }
}