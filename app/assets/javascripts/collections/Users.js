var app = app || {};

app.Users = Backbone.Collection.extend({
    url: '/users',
    model: app.User,
    initialize: function () {
        this.on('add', function() {

        })
    }
})
