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
  pizza: ["Something cheesy", "Pizza", "Something with cheese", "To fill me up as cheaply as possible", "$5", "No", "Cheese platter", "Pizza spot", "Yellow"],
  indian: ["Indian", "To experience different flavors and spices", "$20", "Yes", "Something saucy and spicy", "Indian joint", "Chicken Tikka Masala", "Red/orange (saucy)"],
  cookie: ["Something sweet", "Cookies", "Dessert", "$5", "I'd rather have something sweet", "To satisfy my sweet tooth", "Pastry shop", "Cookies/brownies", "Cakes/cookies", "Brownies"],
  burrito: ["Something cheesy", "$10", "Slightly", "Tacos, Red/orange (saucy)", "Multicolored"],
  sushi: ["Japanese/Chinese", "Flavor and nuance", "$50", "Fresh sushi", "Multicolored"],
  burgers: ["Something cheesy", "Something with cheese", "To fill me up as cheaply as possible", "$10", "No", "Burgers"],
  chinese: ["$20", "Japanese/Chinese", "Slightly", "Something saucy and spicy", "Chinese takeout", "Red/orange (saucy)"],
  salad: ["Something healthy", "$20", "Nutrients and nourishment", "Healthy food",  "Grocery for fresh ingredients", "Veggetable platter", "Assorted vegetables", "Green", "Multicolored"],
  soup: ["Something healthy", "Nutrients and nourishment", "$5", "Green"],
  cake: ["Something sweet", "Dessert", "I'd rather have something sweet", "To satisfy my sweet tooth", "Healthy food", "Pastry shop", "Pastries", "Cakes/cookies"],
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
