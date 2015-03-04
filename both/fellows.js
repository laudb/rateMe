Fellows = new Mongo.Collection("fellow");

Fellows.attachSchema(new SimpleSchema({
  name:{
    type: String,
    label: "Name",
    max: 100
  },
  subject:{
    type: String,
    label: "Name",
    max: 50
  }
})
);