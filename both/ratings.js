Ratings = new Mongo.Collection('rating');

Ratings.attachSchema(new SimpleSchema({
	stars:{
		type:Number,
		optional: true,
		autoform:{
			type: "select-radio-inline",
			options: function(){
				return [
				{label: "1 star", value: 1},
				{label: "2 stars", value: 2},
				{label: "3 stars", value: 3},
				{label: "4 stars", value: 4},
				]
			}
		}
	}
}))