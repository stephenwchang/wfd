/* eslint-disable indent */
/* eslint-disable prettier/prettier */
var db = require("../models");
var yelp = require("yelp-fusion");
var unirest = require("unirest");
var client = yelp.client(
  "4fACeJwQ9CqbO2yggEhcQTchFhAhKVFEf-cZGhxCL3uY3uO4iKcx55PfxUJ-h_faNZQsWFQX6I13LdVQZ9JktmQU9x4a5Oul0Ri-JvhQ-MjrpM4aO2yr8ijmGy_5XHYx"
);

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
  app.get("/results/restaurant/:result/:zip", function(req, res) {
    client
      .search({
        term: req.params.result,
        location: req.params.zip
      })
      .then(function(response) {
        res.render("restaurant-results", {
          survey: { response: req.params.result },
          results: response.jsonBody.businesses
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  });

  // route serves up recipe results based off user survey result -- NEEDS TWO STEP API REQ[1. search user survey result via initial API req, retrieve food id to search via API]
  // app.post("/results/recipe", function(req, res) {


  // });

  // Get all examples
  app.get("/results/recipe/:result", function(req, res) {
    var surveyResult = req.params.result;
    // res.redirect("/results/recipe")
    unirest
    .get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?type=main+course&query=" + surveyResult)
    .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "22ba6c9db7msh44b0d10b0c53a95p127960jsnea150f3f44f7")
    .end(function(result) {
      var foodId = result.body.results[Math.floor(Math.random() * result.body.results.length)].id;
      unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + foodId + "/information")
        .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
        .header("X-RapidAPI-Key", "22ba6c9db7msh44b0d10b0c53a95p127960jsnea150f3f44f7")
        .end(function (result) {
          console.log(result.body);
          res.render("recipe-results",
          {
            recipe: result.body,
            ingredients: result.body.extendedIngredients,
            survey: { response: surveyResult }
          });
        });
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
