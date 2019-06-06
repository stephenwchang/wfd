var db = require("../models");
const yelp = require('yelp-fusion');
const client = yelp.client('4fACeJwQ9CqbO2yggEhcQTchFhAhKVFEf-cZGhxCL3uY3uO4iKcx55PfxUJ-h_faNZQsWFQX6I13LdVQZ9JktmQU9x4a5Oul0Ri-JvhQ-MjrpM4aO2yr8ijmGy_5XHYx');



module.exports = function(app) {

  app.get("/api/search/:food", function(req, res) {
    client.search({
      term: req.params.food,
      location: 'somserset, new jersey',
    }).then(response => {
      res.json(response.jsonBody);
    }).catch(e => {
      console.log(e);
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
