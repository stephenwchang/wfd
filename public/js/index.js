//user1: "savory", "pasta/pizza", "pastries" -  pizza(2), brownies(1)
var userScore = {
  pizza: 0,
  chickenMassala: 0,
  brownie: 0,
  burrito: 0,
  sushi: 0,
  burgers: 0,
  chineseFood: 0,
  salad: 0,
  vegiSoup: 0,
  carrotCake: 0,
};

var userFoodAns = [];

var foodKey = {
  pizza: ["something cheesy", "probably pizza", "something with cheese", "to fill me up as cheaply as possible", "five bucks", "no man", "idk but cheese", "pizza spot", "gotta have cheese", "pizza", "yellow (CHEESE)"],
  chickenMassala: ["indian food", "to experience diff flavors and spices", "twenty bucks", "hell yes", "something saucy and spicy", "indian joint", "chicken tikka masala", "red/orange (saucy)"],
  brownie: ["something sweet", "dessert", "five bucks", "I'd rather have sweet", "Dinner?naw, dessert", "pastry shop", "cookies/brownies", "cakes/cookies", "brownies"],
  burrito: ["something cheesy", "ten bucks", "maybe a lil", "tacos, red/orange (saucy)", "multicolored"],
  sushi: ["japanese/chinese food", "flavor and nuance", "im ballin’ idgaf", "fresh sushi", "multicolored"],
  burgers: ["something cheesy", "something with cheese", "to fill me up as cheaply as possible", "ten bucks", "no man", "burgers 4 days"],
  chineseFood: ["twenty bucks", "japanese/chinese food", "maybe a lil", "something saucy and spicy", "chinese takeout", "red/orange (saucy)"],
  salad: ["something refreshing/healthy", "not to die", "twenty bucks", "no man", "healthy food",  "grocery for fresh ingredients", "vegi bro", "assorted vegetables", "green", "multicolored"],
  vegiSoup: ["something refreshing/healthy", "not to die", "five bucks", "vegi bro", "green"],
  carrotCake: ["something sweet", "dessert", "I'd rather have sweet", "Dinner?naw, dessert", "healthy food", "pastry shop", "pastries", "cakes/cookies"],
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

$("#stay-in").on("click", function() {
  window.location.replace("/results/recipe/"+generateResult())
});

$("#go-out").on("click", function() {
  window.location.replace("/results/restaurant/"+generateResult())
});

function generateResult() {
  for (var i = 0; i < userFoodAns.length; i++) {
    var ans = userFoodAns[i];
    for (var key in foodKey) {
      if (foodKey[key].includes(ans)) {
        userScore[key]++;
        console.log("user score" + JSON.stringify(userScore));
      }
    }
  }

  var surveyResult = "pizza";
  return surveyResult;
}
