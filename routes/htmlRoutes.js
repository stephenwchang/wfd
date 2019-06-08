var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function() {
      res.render("index", {
        questions: [
          {
            question: "question 1",
            answer1: "answer1",
            answer2: "answer2",
            answer3: "answer3"
          },
          {
            question: "question 2",
            answer1: "answer4",
            answer2: "answer5",
            answer3: "answer6"
          },
          {
            question: "question 3",
            answer1: "answer7",
            answer2: "answer8",
            answer3: "answer9"
          }
        ]
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
