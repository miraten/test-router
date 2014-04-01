if (Sites.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var adminId = Accounts.createUser({
    username: 'admin',
    profile: { name: 'Administrator' }
  });
  Accounts.setPassword(adminId, '1111');
  var admin = Meteor.users.findOne(adminId);
  
  var leesangwonId = Accounts.createUser({
    username: 'leesangwon',
    profile: { name: 'Lee Sangwon' }
  });
  Accounts.setPassword(leesangwonId, '1111');
  var leesangwon = Meteor.users.findOne(leesangwonId);
  
  Sites.insert({
    name: 'telescope',
    title: 'Introducing Telescope',
    type: 'private',
    owner: {id: adminId, name: admin.profile.name},
    createdTime: now - 7 * 3600 * 1000
  });

  Sites.insert({
    name: 'meteor',
    title: 'Meteor',
    type: 'public',
    owner: {id: leesangwonId, name: leesangwon.profile.name},
    createdTime: now - 5 * 3600 * 1000
  });

  Sites.insert({
    name: 'meteor_book',
    title: 'The Meteor Book',
    type: 'private',
    owner: {id: leesangwonId, name: leesangwon.profile.name},
    createdTime: now - 3 * 3600 * 1000
  });
}

