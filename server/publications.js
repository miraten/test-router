
// Site publications
Meteor.publish('sites', function(options) {
  return Sites.find({}, options);
});

