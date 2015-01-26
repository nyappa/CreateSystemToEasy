Apps.module('Controller', function (Controller, App, Backbone, Marionette, $, _) {
  Controller.set = Marionette.Controller.extend({
      home : function() {
          var layout = new Apps.Views.ModerationLayout;
          layout.pageContents.show(new Apps.Views.topView());
      },
      example : function(id) {
          var AppsCollection = new Apps.Model.AppsCollection,
              layout         = new Apps.Views.ModerationLayout;
          AppsCollection.fetch({
              data     : { "id" : id },
              method   : "GET",
              dataType : "json",
              success  : function () {
                  layout.pageContents.show(new Apps.Views.AppsListView(
                      { collection : AppsCollection }
                  ));
              },
              error    : function () {
              }
          });
      }
  });
});
