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
Router.route('/fellows', function(){
	this.render('fellows');
},
{
	name: 'fellows'
});