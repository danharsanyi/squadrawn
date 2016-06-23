var app = app || {};

app.MembersView = Backbone.View.extend({
    el: '#membersContainer',
    render: function () {
        var membersViewTemplate = $('#membersViewTemplate').html();
        this.$el.html(membersViewTemplate);

        var memberView = new app.MemberView();
        memberView.render();

    }
})
