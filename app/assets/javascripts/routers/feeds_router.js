NewReader.Routers.Feeds = Backbone.Router.extend({

  routes: {
    "feeds/:id": "showFeed",
    "feeds/": "feedIndex",
    "" : "feedIndex"
  },
  showFeed: function(id){
    console.log("show!!", id)
    var v = new NewReader.Views.FeedsShow({id: id});
    v.render();
  },
  feedIndex: function(){
    console.log("index!!")
    var v = new NewReader.Views.FeedsIndex();
    v.render();
  }
});
