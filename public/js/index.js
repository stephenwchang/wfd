//user1: "savory", "pasta/pizza", "pastries" -  pizza(2), brownies(1)
var userScore = {
  pizza: 0,
  brownies: 0,
  tacos: 0
};

var userFoodAns = [];

//questions and answers are stored in database... how to a) randomly serve a question with its answers in the survey from the database, b) store the users selection in the above variable c) return local object
var foodKey = {
  pizza: ["something cheesy", "savory", "pasta/pizza"],
  brownies: ["brownies/cookies", "pastries", "something sweet"],
  tacos: ["spicy", "salsa", "something seasoned"]
};

$(".food-choice").on("click", function(){
  var currentId = $(this).data("id");   // retrieves the data-id of the current row of buttons
  $(`[data-id=${currentId}]`).attr("disabled", true); // disables all buttons of the same row
  $(this).css("background-color", "green");
  $(this).css("opacity", 1);
  userFoodAns.push(this.textContent);
  console.log(currentId);
  console.log(userFoodAns);
});

$("#submit-button").on("click", function() {
  for (var i = 0; i < userFoodAns.length; i++) {
    var ans = userFoodAns[i];
    for (var key in foodKey) {
      if (foodKey[key].includes(ans)) {
        userScore[key]++;
        console.log("user score" + JSON.stringify(userScore));
      }
    }
  }
});
