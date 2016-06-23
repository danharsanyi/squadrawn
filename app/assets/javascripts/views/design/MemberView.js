var app = app || {};

app.MemberView = Backbone.View.extend({
    tagName: 'li',
    render: function () {
        console.log('memberView initialised')
        var memberViewTemplate = $('#memberViewTemplate').html();
        this.$el.html(memberViewTemplate);

        this.$el.appendTo('#memberList');
        console.log('memberView fired');
    }
})
