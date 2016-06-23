var app = app || {};

app.ElementView = Backbone.View.extend({
  tagName: 'li',
  render: function(elementObj){

      var element = JSON.parse(elementObj.element_data);

      var elementTemplate = $('#elementItemView').html();
      var _elementTemplate = _.template(elementTemplate);
      var elementWithData = _elementTemplate({
          title: element.name,
          image: element.value.url,
          type: elementObj.element_type,
          id: elementObj.id
      });

      console.log('rendering element');

      this.$el.html(elementWithData);
      this.$el.appendTo('#elementsList ul');
  }
});
