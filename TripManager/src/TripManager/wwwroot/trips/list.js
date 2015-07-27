import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {CssAnimator} from "aurelia-animator-css";

@inject(HttpClient, Element, CssAnimator)
export class List {
    constructor(httpClient, element, animator) {
        this.http = httpClient;
        this.element = element;
        this.animator = animator;
    }

    activate() {
        $.connection.hub.logging = true;
        this.hub = $.connection.tripsHub;
        var self = this;
        this.hub.client.addNewMessageToPage =
            msg => {
                self.trips.filter(t => t.code === msg.code).forEach(t => {
                    t.expectedArrival = msg.expectedArrival;

                    let editedItemIdx = self.trips.indexOf(t);
                    var elem = self.element.querySelectorAll('tbody tr')[editedItemIdx + 1].querySelectorAll('td')[5];

                    this.animator.addClass(elem, 'background-animation').then(() => {
                        this.animator.removeClass(elem, 'background-animation');
                    });
                })
            };
        $.connection.hub.start();
        return this.http.get("../api/trip").then(r => this.trips = r.content);
    }
}