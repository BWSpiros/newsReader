NewReader.Views.FeedsIndex = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, "render");

    this.listenTo(NewReader.Collections.feedCollection, "add", this.render);
    this.listenTo(NewReader.Collections.feedCollection, "change", this.render);

    this.$el = $('#content');
  },
  render: function(){
    var rendered_content = this.template({feeds:NewReader.Collections.feedCollection});
    this.$el.empty();
    this.$el.html(rendered_content);
    return this;
  },
  events: {
    "click #refresh": "refresh",
    "click .feedLink": "toFeed"
  },
  refresh: function(){
    NewReader.Collections.feedCollection.fetch({url:"/feeds"});
  },

  toFeed: function(event){
    NewReader.Routers.feedRouter.showFeed($(event.target).attr('data-id'))
  },

  template: JST['feeds/index']

});
