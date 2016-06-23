var app = app || {};

app.MembersView = Backbone.View.extend({
    el: '#membersContainer',
    render: function () {
        var membersViewTemplate = $('#membersViewTemplate').html();
        this.$el.html(membersViewTemplate);
        app.currentMembers.forEach(function( member ) {
            console.log('looping through currentMembers')
            var memberView = new app.MemberView();
            memberView.render(member);
        })
    }
})
