var app = app || {}

app.User = Backbone.Model.extend({
    urlRoot: '/users',
    defaults: {
        id: null,
        email: "",
        name: "",
        password_digest: "",
        admin: false,
        image: null,
    },
    initialize: function () {
        this.on('add', function() {
            
        })
    }
})
