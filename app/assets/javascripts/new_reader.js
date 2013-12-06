window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewReader.Collections.feedCollection = new NewReader.Collections.Feeds();
    NewReader.Collections.feedCollection.fetch({url:'/feeds', success: function(){
      var $el = $('#content');
      NewReader.Routers.feedRouter = new NewReader.Routers.Feeds();
      Backbone.history.start({pushState: true});
      //NewReader.Routers.feedRouter.feedIndex();
    }});


  }
};

$(document).ready(function(){
  NewReader.initialize();
});
