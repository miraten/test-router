console.log('Loaded routers...');

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.map(function() {
  this.route('sitesList', {
    path: '/',
    waitOn: function() {
      var subs = Meteor.subscribe('sites');
      console.log('list subscriptions done');
      return subs;
    },
    data: function() {
      return {
        sites: function() {return Sites.find({});}
      };
    }
  });
  
  this.route('sitePage', {
    path: '/site/:_id',
    waitOn: function() {
      var array = Meteor.subscribe('sites', {_id: this.params._id});
      console.log('page subscriptions done');
      return array;
    },
    
    data: function() {
      var value = Sites.findOne(this.params._id);
      if (value == undefined) {
        console.log('data read fail');
      } else {
        console.log('data value = ' + value.title);
      }
      console.log('process in ' + (Meteor.isClient) ? 'client' : 'server');
      
      return value;
    }    
  });
  
});
