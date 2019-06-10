USE dinner_db;
CREATE TABLE foods_test (
 food_id INT NOT NULL,
 food_question VARCHAR (255) NOT NULL, 
 food_choices1 VARCHAR (255),
 food_choices2 VARCHAR (255), 
 food_choices3 VARCHAR (255), 
 food_choices4 VARCHAR (255), 
 PRIMARY KEY (food_id),
 UNIQUE (food_question)
)
SELECT * FROM foods_test;

INSERT INTO Foods
(food_question, food_choices1, food_choices2, food_choices3, food_choices4, createdAt, updatedAt)
VALUES
("what are you craving right now?", "something cheesy", "something refreshing/healthy","something sweet", "probably pizza", 1, 2),
("You’ve committed a heinous crime, what is your last meal?", "japanese/chinese food", "something with cheese", "dessert", "indian food", 1, 1),
("what is the purpose of food?", "to fill me up as cheaply as possible", "flavor and nuance", "to experience diff flavors and spices", "not to die", 1, 1),
("How much are you trying to spend?", "ten bucks", "twenty bucks", "five bucks", "im ballin’ idgaf", 1, 1),
("Do you like spicy stuff?", "no man", "hell yes", "maybe a lil", "I'd rather have sweet", 1, 1),
("Sunday dinner is coming-what’re you making?", "Dinner?naw, dessert", "healthy food", "idk but cheese", "something saucy and spicy", 1, 1),
("You’re super hungry and you enter the nearest strip mall, where are you goin?", "pizza spot", "indian joint", "pastry shop", "grocery for fresh ingredients", 1, 1),
("Go-to munchie food?", "chinese takeout", "cookies/brownies", "gotta have cheese", "vegi bro", 1, 1),
("You have to eat one food for every meal for an entire month, which is it?", "burgers 4 days", "cakes/cookies", "fresh sushi", "chicken tikka masala", 1, 1),
("You're entering a food eating contest, what are you goin for?", "pizza", "tacos", "brownies", "assorted vegetables", 1, 1),
("The best foods are...?", "green", "yellow (CHEESE)", "red/orange (saucy)", "multicolored", 1, 1);
