//user1: "savory", "pasta/pizza", "pastries" -  pizza(2), brownies(1)
var userScore = {
  pizza: 0,
  indian: 0,
  cookie: 0,
  burrito: 0,
  sushi: 0,
  burgers: 0,
  chinese: 0,
  salad: 0,
  soup: 0,
  cake: 0,
};

var userFoodAns = [];

var foodKey = {
  pizza: ["something cheesy", "probably pizza", "something with cheese", "to fill me up as cheaply as possible", "five bucks", "no man", "idk but cheese", "pizza spot", "gotta have cheese", "pizza", "yellow (CHEESE)"],
  indian: ["indian food", "to experience diff flavors and spices", "twenty bucks", "hell yes", "something saucy and spicy", "indian joint", "chicken tikka masala", "red/orange (saucy)"],
  cookie: ["something sweet", "dessert", "five bucks", "I'd rather have sweet", "Dinner?naw, dessert", "pastry shop", "cookies/brownies", "cakes/cookies", "brownies"],
  burrito: ["something cheesy", "ten bucks", "maybe a lil", "tacos, red/orange (saucy)", "multicolored"],
  sushi: ["japanese/chinese food", "flavor and nuance", "im ballin’ idgaf", "fresh sushi", "multicolored"],
  burgers: ["something cheesy", "something with cheese", "to fill me up as cheaply as possible", "ten bucks", "no man", "burgers 4 days"],
  chinese: ["twenty bucks", "japanese/chinese food", "maybe a lil", "something saucy and spicy", "chinese takeout", "red/orange (saucy)"],
  salad: ["something refreshing/healthy", "not to die", "twenty bucks", "no man", "healthy food",  "grocery for fresh ingredients", "vegi bro", "assorted vegetables", "green", "multicolored"],
  soup: ["something refreshing/healthy", "not to die", "five bucks", "vegi bro", "green"],
  cake: ["something sweet", "dessert", "I'd rather have sweet", "Dinner?naw, dessert", "healthy food", "pastry shop", "pastries", "cakes/cookies"],
};


$(".food-choice").on("click", function(){
  var currentId = $(this).data("id");   // retrieves the data-id of the current row of buttons
  $(`[data-id=${currentId}]`).attr("disabled", true); // disables all buttons of the same row
  $(this).removeClass("color-2").addClass("color-3");
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
  var locationForm = $('<form class="form-inline"><div class="form-group mx-sm-3 mb-2"><input type="text" id="zip-input" class="form-control" placeholder="Enter your ZIP code"</div><button type="button" id="zip-button" class="btn btn-info btn-hover color-2">Submit</button></form>');
  $("#submit-buttons").append(locationForm);

  $("#zip-button").on("click", function() {
    var zip = $("#zip-input").val();
    window.location.replace("/results/restaurant/"+generateResult()+"/"+zip);
  });
});



$("#back-button").on("click", function() {
  window.location.replace("/")
});


function generateResult() {
  for (var i = 0; i < userFoodAns.length; i++) {
    var ans = userFoodAns[i];
    for (var key in foodKey) {
      if (foodKey[key].includes(ans)) {
        userScore[key]++;
      }
    }
  }
  console.log("user score" + JSON.stringify(userScore));
  maxResults = getMax(userScore);
  var surveyResult = maxResults[Math.floor(Math.random() * maxResults.length)];
  return surveyResult;
}

function getMax(object) {
  return Object.keys(object).filter(function(x) {
       return object[x] == Math.max.apply(null,
       Object.values(object));
 });
};

// load modals on page load

$(window).on("load", function() {
  $("#restaurantModal").modal("show");
});
