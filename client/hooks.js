AutoForm.addHooks(null,{
  onError:function(operation, error, template){
    console.log('Error: '+error);
  }
})
//Hooks for application
AutoForm.hooks({
  insertEventForm:{
    onSuccess:function(operation, result, template){
      Router.go('fellows')
    },

    onError: function(operation, result, template) {
      alert(error)
    }
  }
});