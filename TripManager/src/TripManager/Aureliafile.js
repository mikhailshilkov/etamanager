var aurelia = require("aurelia-cli");

aurelia.command("bundle", {
    js: {
        "wwwroot/appbundle": {
            modules: [
                "app", "trips/*",
                "aurelia-bootstrapper",
                "aurelia-framework",
                "aurelia-http-client",
                "aurelia-animator-css",
                "github:aurelia/templating-binding@0.13.1",
                "github:aurelia/templating-resources@0.13.1",
                "github:aurelia/templating-router@0.14.0",
                "github:aurelia/loader-default@0.9.0",
                "github:aurelia/history-browser@0.6.1",
                "github:aurelia/html-template-element@0.2.0",
                "npm:babel-core@5.8.3"
            ],
            options: {
                inject: true, minify:true
            }
        }
    },
    template: {
        "wwwroot/appbundle": {
            pattern: "**/*.html",
            options: {
                inject: true
            }
        }
    }
});