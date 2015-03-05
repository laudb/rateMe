// .rateit elements need to be progressively enhanced after they're created
Template.rating.rendered = function () {
	this.$('.rateit').rateit();
}