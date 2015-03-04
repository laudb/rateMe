
AutoForm.addHooks(['Insert', 'Update'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Success!');
    Router.go("fellows");
  }
});
