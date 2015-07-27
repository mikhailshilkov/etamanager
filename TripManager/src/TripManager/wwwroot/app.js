export class App {

    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route:["", "movements"], moduleId:"trips/list", 
                title:"Movements", nav:true, name:"home" },

            { route:"movements/:id", moduleId:"trips/details", name: "details" }
        ]);
    }

}