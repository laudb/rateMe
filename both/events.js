Events = new Mongo.Collection("event");


Events.attachSchema(new SimpleSchema({
  eventName:{
    type: String,
    label: "Name of Event",
    max: 100
  },
  eventFellow:{
    type: String,
    label: "Name of Fellow",
    max: 100
  },
  timeDuration: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  }
  // rating:{
  //   type: Number,
  //   optional: true,
  //   autoform: {
  //     type: "select-radio-inline",
  //     options: function () {
  //       return [
  //       {label: "1 star", value: 1},
  //       {label: "2 stars", value: 2},
  //       {label: "3 stars", value: 3},
  //       {label: "4 stars", value: 4},
  //       {label: "5 stars", value: 5},
  //       ];
  //     }
  //   }
  // }
})
);

