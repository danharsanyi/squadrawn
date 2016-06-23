var app = app || {};

app.MemberView = Backbone.View.extend({
    tagName: 'li',
    render: function (member) {
        console.log('memberView initialised')
        var memberViewTemplate = $('#memberViewTemplate').html();
        var _memberViewTemplate = _.template(memberViewTemplate);
        var memberViewWithData = _memberViewTemplate({
            name: member,
        });

        this.$el.html(memberViewWithData);
        this.$el.appendTo('#memberList');
        console.log('memberView fired');
    }
})
