var db = require("../models");
var yelp = require("yelp-fusion");
var unirest = require("unirest");
var client = yelp.client(
  "4fACeJwQ9CqbO2yggEhcQTchFhAhKVFEf-cZGhxCL3uY3uO4iKcx55PfxUJ-h_faNZQsWFQX6I13LdVQZ9JktmQU9x4a5Oul0Ri-JvhQ-MjrpM4aO2yr8ijmGy_5XHYx"
);

/*
Loop thru the array for each food item and count how many of the user's responses are
present and assign a point
*/
//user1: "savory", "pasta/pizza", "pastries" -  pizza(2), brownies(1)

/* var user = {
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
*/

//look into user to find key which has highest numerical value

module.exports = function(app) {
  // test route for yelp food param
  app.get("/api/search/:food", function(req, res) {
    client
      .search({
        term: req.params.food,
        location: "somserset, new jersey"
      })
      .then(function(response) {
        res.json(response.jsonBody);
      })
      .catch(function(e) {
        console.log(e);
      });
  });

  // route serves up restaurant results based off user survey result
  app.get("/results/restaurant", function(req, res) {
    client
      .search({
        term: "pizza",
        location: "somserset, new jersey"
      })
      .then(function(response) {
        res.render("results", {
          results: response.jsonBody.businesses
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  });

  // route serves up recipe results based off user survey result -- NEEDS TWO STEP API REQ[1. search user survey result via initial API req, retrieve food id to search via API]
  app.get("/results/recipe", function(req, res) {
    unirest
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?type=main+course&query=hotdog"
      )
      .header(
        "X-RapidAPI-Host",
        "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
      )
      .header(
        "X-RapidAPI-Key",
        "d9998d3243msh03685cdf429ad73p1caebejsn36b4a0c9ebf0"
      )
      .end(function(result) {
        res.json(result.body);
        console.log(result.status, result.headers, result.body);
      });
  });

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
