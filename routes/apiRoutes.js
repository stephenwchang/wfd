var db = require("../models");

/*
Loop thru the array for each food item and count how many of the user's responses are 
present and assign a point
*/
//user1: "savory", "pasta/pizza", "pastries" -  pizza(2), brownies(1)

var user = {
  pizza: 0,
  brownies: 0,
  tacos: 0
};

var user1foodAns = [
  "savory",
  "something cheesy",
  "pizza/pasta",
  "brownies/cookies"
];
//questions and answers are stored in database... how to a) randomly serve a question with its answers in the survey from the database, b) store the users selection in the above variable c) return local object
var foodKey = {
  pizza: ["something cheesy", "savory", "pasta/pizza"],
  brownies: ["brownies/cookies", "pastries", "something sweet"],
  tacos: ["spicy", "salsa", "something seasoned"]
};

for (var i = 0; i < user1foodAns.length; i++) {
  var ans = user1foodAns[i];

  for (var key in foodKey) {
    if (foodKey[key].includes(ans)) {
      user[key]++;
    }
  }
}

//look into user to find key which has highest numerical value

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
