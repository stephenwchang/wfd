USE testdb;
CREATE TABLE foods (
 food_id INT NOT NULL,
 food_question VARCHAR (30) NOT NULL, 
 food_choices1 INT NOT NULL,
 food_choices2 INT NOT NULL, 
 food_choices3 INT NOT NULL, 
 food_choices4 INT NOT NULL, 
 PRIMARY KEY (food_id),
 UNIQUE (food_question)
);

INSERT INTO foods
(food_id, food_question, food_choices1, food_choices2, food_choices3, food_choices4)
VALUES
(1, "what are you craving right now", "something cheesy", "something refreshing/healthy","something sweet", "probably pizza")
(2, "You’ve committed a heinous crime, what is your last meal?", "japanese/chinese food", "something with cheese", "dessert", "indian food")  
(3, "what is the purpose of food?", "to fill me up as cheaply as possible", "flavor and nuance", "to experience diff flavors and spices", "not to die")
(4, "How much are you trying to spend?", "ten bucks", "twenty bucks", "five bucks", "im ballin’ idgaf")
(5, "Do you like spicy stuff?", "no man", "hell yes", "maybe a lil", "I'd rather have sweet")
(6, "Sunday dinner is coming-what’re you making", "Dinner?naw, dessert", "healthy food", "idk but cheese", "something saucy and spicy")
(7, "You’re super hungry and you enter the nearest strip mall, where are you goin?", "pizza spot", "indian joint", "pastry shop", "grocery for fresh ingredients")
(8, "Go to munchie food?", "chinese takeout", "cookies/brownies", "gotta have cheese", "vegi bro")
(9, "You have to eat one food for every meal for an entire month, which is it?", "burgers 4 days", "cakes/cookies", "fresh sushi", "chicken tikka masala")
(10, "You're entering a food eating contest, what are you goin for", "pizza", "tacos", "brownies", "assorted vegetables")
(11, "The best foods are...?", "green", "yellow (CHEESE)", "red/orange (saucy)", "multicolored")
