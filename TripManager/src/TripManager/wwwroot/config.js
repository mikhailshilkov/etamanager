System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "appbundle": [
      "github:aurelia/html-template-element@0.2.0/HTMLTemplateElement.min",
      "github:aurelia/html-template-element@0.2.0",
      "npm:core-js@0.9.18/modules/$.fw",
      "npm:core-js@0.9.18/modules/$.dom-create",
      "npm:core-js@0.9.18/modules/$.shared",
      "npm:core-js@0.9.18/modules/$.uid",
      "npm:core-js@0.9.18/modules/$.redef",
      "npm:core-js@0.9.18/modules/$.invoke",
      "npm:core-js@0.9.18/modules/$.assert",
      "npm:core-js@0.9.18/modules/$.array-includes",
      "npm:core-js@0.9.18/modules/$.replacer",
      "npm:core-js@0.9.18/modules/$.throws",
      "npm:core-js@0.9.18/modules/$.keyof",
      "npm:core-js@0.9.18/modules/$.enum-keys",
      "npm:core-js@0.9.18/modules/$.get-names",
      "npm:core-js@0.9.18/modules/$.assign",
      "npm:core-js@0.9.18/modules/$.same",
      "npm:core-js@0.9.18/modules/$.set-proto",
      "npm:core-js@0.9.18/modules/es6.object.to-string",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives",
      "npm:core-js@0.9.18/modules/es6.function.name",
      "npm:core-js@0.9.18/modules/es6.function.has-instance",
      "npm:core-js@0.9.18/modules/es6.number.constructor",
      "npm:core-js@0.9.18/modules/es6.number.statics",
      "npm:core-js@0.9.18/modules/es6.math",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point",
      "npm:core-js@0.9.18/modules/es6.string.raw",
      "npm:core-js@0.9.18/modules/$.string-at",
      "npm:core-js@0.9.18/modules/$.iter",
      "npm:core-js@0.9.18/modules/$.iter-define",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at",
      "npm:core-js@0.9.18/modules/es6.string.ends-with",
      "npm:core-js@0.9.18/modules/es6.string.includes",
      "npm:core-js@0.9.18/modules/$.string-repeat",
      "npm:core-js@0.9.18/modules/es6.string.starts-with",
      "npm:core-js@0.9.18/modules/$.iter-call",
      "npm:core-js@0.9.18/modules/$.iter-detect",
      "npm:core-js@0.9.18/modules/es6.array.of",
      "npm:core-js@0.9.18/modules/$.unscope",
      "npm:core-js@0.9.18/modules/$.species",
      "npm:core-js@0.9.18/modules/es6.array.copy-within",
      "npm:core-js@0.9.18/modules/es6.array.fill",
      "npm:core-js@0.9.18/modules/es6.array.find",
      "npm:core-js@0.9.18/modules/es6.array.find-index",
      "npm:core-js@0.9.18/modules/es6.regexp",
      "npm:core-js@0.9.18/modules/$.for-of",
      "npm:process@0.10.1/browser",
      "npm:core-js@0.9.18/modules/$.mix",
      "npm:core-js@0.9.18/modules/$.collection-strong",
      "npm:core-js@0.9.18/modules/$.collection",
      "npm:core-js@0.9.18/modules/es6.set",
      "npm:core-js@0.9.18/modules/$.collection-weak",
      "npm:core-js@0.9.18/modules/es6.weak-set",
      "npm:core-js@0.9.18/modules/$.own-keys",
      "npm:core-js@0.9.18/modules/es7.array.includes",
      "npm:core-js@0.9.18/modules/es7.string.at",
      "npm:core-js@0.9.18/modules/$.string-pad",
      "npm:core-js@0.9.18/modules/es7.string.rpad",
      "npm:core-js@0.9.18/modules/es7.regexp.escape",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@0.9.18/modules/es7.object.to-array",
      "npm:core-js@0.9.18/modules/$.collection-to-json",
      "npm:core-js@0.9.18/modules/es7.set.to-json",
      "npm:core-js@0.9.18/modules/js.array.statics",
      "npm:core-js@0.9.18/modules/$.partial",
      "npm:core-js@0.9.18/modules/web.immediate",
      "npm:core-js@0.9.18/modules/web.dom.iterable",
      "npm:core-js@0.9.18/modules/core.dict",
      "npm:core-js@0.9.18/modules/core.iter-helpers",
      "npm:core-js@0.9.18/modules/core.$for",
      "npm:core-js@0.9.18/modules/core.delay",
      "npm:core-js@0.9.18/modules/core.function.part",
      "npm:core-js@0.9.18/modules/core.object",
      "npm:core-js@0.9.18/modules/core.array.turn",
      "npm:core-js@0.9.18/modules/core.number.iterator",
      "npm:core-js@0.9.18/modules/core.number.math",
      "npm:core-js@0.9.18/modules/core.string.escape-html",
      "npm:core-js@0.9.18/modules/core.date",
      "npm:core-js@0.9.18/modules/core.global",
      "npm:core-js@0.9.18/modules/core.log",
      "github:aurelia/history@0.6.0/index",
      "npm:core-js@0.9.18/modules/$",
      "npm:core-js@0.9.18/modules/$.wks",
      "npm:core-js@0.9.18/modules/$.def",
      "npm:core-js@0.9.18/modules/$.ctx",
      "npm:core-js@0.9.18/modules/es6.symbol",
      "npm:core-js@0.9.18/modules/es6.object.assign",
      "npm:core-js@0.9.18/modules/es6.object.is",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of",
      "npm:core-js@0.9.18/modules/es6.string.iterator",
      "npm:core-js@0.9.18/modules/es6.string.repeat",
      "npm:core-js@0.9.18/modules/es6.array.from",
      "npm:core-js@0.9.18/modules/es6.array.iterator",
      "npm:core-js@0.9.18/modules/es6.array.species",
      "npm:process@0.10.1",
      "npm:core-js@0.9.18/modules/es6.map",
      "npm:core-js@0.9.18/modules/es6.weak-map",
      "npm:core-js@0.9.18/modules/es6.reflect",
      "npm:core-js@0.9.18/modules/es7.string.lpad",
      "npm:core-js@0.9.18/modules/es7.map.to-json",
      "npm:core-js@0.9.18/modules/web.timers",
      "github:aurelia/history@0.6.0",
      "npm:core-js@0.9.18/modules/$.cof",
      "npm:core-js@0.9.18/modules/$.array-methods",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:core-js@0.9.18/modules/es5",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.18/modules/$.task",
      "npm:core-js@0.9.18/modules/es6.promise",
      "npm:core-js@0.9.18/shim",
      "npm:core-js@0.9.18/index",
      "npm:core-js@0.9.18",
      "github:aurelia/history-browser@0.6.1/index",
      "github:aurelia/history-browser@0.6.1",
      "github:aurelia/path@0.8.0/index",
      "github:aurelia/path@0.8.0",
      "github:aurelia/loader@0.8.2/index",
      "github:aurelia/loader@0.8.2",
      "github:aurelia/metadata@0.7.0/index",
      "github:aurelia/metadata@0.7.0",
      "github:aurelia/loader-default@0.9.0/index",
      "github:aurelia/loader-default@0.9.0",
      "github:aurelia/logging@0.6.1/index",
      "github:aurelia/route-recognizer@0.6.0/index",
      "github:aurelia/event-aggregator@0.6.1/index",
      "github:aurelia/task-queue@0.6.0/index",
      "github:aurelia/templating-router@0.14.0/router-view",
      "github:aurelia/templating-router@0.14.0/route-href",
      "github:aurelia/logging@0.6.1",
      "github:aurelia/route-recognizer@0.6.0",
      "github:aurelia/event-aggregator@0.6.1",
      "github:aurelia/task-queue@0.6.0",
      "github:aurelia/dependency-injection@0.9.0/index",
      "github:aurelia/binding@0.8.2/index",
      "github:aurelia/dependency-injection@0.9.0",
      "github:aurelia/binding@0.8.2",
      "github:aurelia/templating@0.13.11/index",
      "github:aurelia/templating@0.13.11",
      "github:aurelia/templating-router@0.14.0/route-loader",
      "github:aurelia/router@0.10.2/index",
      "github:aurelia/router@0.10.2",
      "github:aurelia/templating-router@0.14.0/index",
      "github:aurelia/templating-router@0.14.0",
      "github:aurelia/templating-resources@0.13.1/if",
      "github:aurelia/templating-resources@0.13.1/with",
      "github:aurelia/templating-resources@0.13.1/repeat",
      "github:aurelia/templating-resources@0.13.1/show",
      "github:aurelia/templating-resources@0.13.1/global-behavior",
      "github:aurelia/templating-resources@0.13.1/sanitize-html",
      "github:aurelia/templating-resources@0.13.1/replaceable",
      "github:aurelia/templating-resources@0.13.1/focus",
      "github:aurelia/templating-resources@0.13.1/compose",
      "github:aurelia/templating-resources@0.13.1/index",
      "github:aurelia/templating-resources@0.13.1",
      "github:aurelia/templating-binding@0.13.1/index",
      "github:aurelia/templating-binding@0.13.1",
      "github:aurelia/animator-css@0.13.0/index",
      "github:aurelia/animator-css@0.13.0",
      "github:aurelia/http-client@0.10.0/index",
      "github:aurelia/http-client@0.10.0",
      "github:aurelia/framework@0.13.3/index",
      "github:aurelia/framework@0.13.3",
      "github:aurelia/logging-console@0.6.0/index",
      "github:aurelia/logging-console@0.6.0",
      "github:aurelia/bootstrapper@0.14.0/index",
      "github:aurelia/bootstrapper@0.14.0",
      "npm:core-js@0.9.18/library/modules/$.fw",
      "npm:babel-runtime@5.8.3/helpers/class-call-check",
      "npm:core-js@0.9.18/library/modules/$",
      "npm:core-js@0.9.18/library/fn/object/define-property",
      "npm:babel-runtime@5.8.3/core-js/object/define-property",
      "npm:babel-runtime@5.8.3/helpers/create-class",
      "trips/list",
      "trips/details",
      "trips/animateonchange",
      "app"
    ]
  }
});

System.config({
  "map": {
    "aurelia-animator-css": "github:aurelia/animator-css@0.13.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-framework": "github:aurelia/framework@0.13.3",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "babel": "npm:babel-core@5.8.3",
    "babel-runtime": "npm:babel-runtime@5.8.3",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "github:aurelia/animator-css@0.13.0": {
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/binding@0.8.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-framework": "github:aurelia/framework@0.13.3",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.1",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.1"
    },
    "github:aurelia/framework@0.13.3": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.1": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.2": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating-resources@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating@0.13.11": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

