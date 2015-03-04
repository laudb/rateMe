Router.configure({
	layoutTemplate: "masterLayout",
	notFoundTemplate: '404'
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

// Router.route('/fellows', function(){
// 	this.render('fellows');
// },
// {
// 	name: 'fellows',
//   data: function() {                
//     return {                        
//       fel: Fellows.find().fetch()
//     }
//   }
// });

Router.route('/listEvents',function(){
  this.render('listEvents');
},
{
  name: 'listEvents',
  data: function() {                
    return {                        
      eve: Events.find().fetch()
    }
  }
});

Router.route('/events', function(){
  this.render('events');
},
{
  name: 'events'
  
});
