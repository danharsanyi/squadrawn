var app = app || {};

app.ElementView = Backbone.View.extend({
  tagName: 'li',
  render: function(element){
      console.log('single element view initialised', element)
      this.$el.html( element.element_data );
      this.$el.appendTo("#elementsList ul");
  }
});
