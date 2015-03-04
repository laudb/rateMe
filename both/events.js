Events = new Mongo.Collection("event");


Events.attachSchema(new SimpleSchema({
  eventName:{
    type: String,
    label: "Name of Class",
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
})
);