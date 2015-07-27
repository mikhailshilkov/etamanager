import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class Details {

    constructor(http) {
        this.http = http;
    }

    activate(params) {
        return this.http.get("../api/trip/" + params.id).then(r => this.trip = r.content);
    }
}