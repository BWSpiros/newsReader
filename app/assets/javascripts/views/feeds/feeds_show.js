NewReader.Views.FeedsShow = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, "render");
    this.feedCollection = NewReader.Collections.feedCollection
    this.listenTo(NewReader.Collections.feedCollection, "add", this.render);
    this.listenTo(NewReader.Collections.feedCollection, "change", this.render);

    this.$el = (this.rootEl || $('#content'));
    this.model = this.feedCollection.findWhere({id: this.id*1})
    console.log("In feedsShow",this.model)
  },
  render: function(){
    console.log(this.model)
    var rendered_content = this.template({model:this.model});
    this.$el.empty();
    this.$el.html(rendered_content);
    return this;
  },
  events: {
    "click #refresh": "refresh"
  },
  refresh: function(){
    this.feedCollection({url:"/feeds"});
  },

  template: JST['feeds/show']

});
