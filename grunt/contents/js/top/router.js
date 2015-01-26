Apps.module('Route', function (Route, App, Backbone, Marionette, $, _) {
    Route.Router = Marionette.AppRouter.extend({
        appRoutes: {
            ''            : 'home',
            'example'     : 'example',
            'example/:id' : 'example'
        }
    });

    Route.addInitializer(function () {
        var router = new Route.Router({
            controller: new Apps.Controller.set()
        });
        Apps.router = router;
    });
});
