console.log('Loaded sites.js ...');

Template.sitePage.helpers({
  
  isOwner: function() {
    console.log('isOwner call ' + this.owner.id);
    return Meteor.userId() && (Meteor.userId() === this.owner.id);
  }
});
