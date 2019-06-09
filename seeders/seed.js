'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Foods', [
      {
        food_question: "what are you craving right now?",
        food_choices1: "something cheesy",
        food_choices2: "something refreshing/healthy",
        food_choices3: "something sweet",
        food_choices4: "probably pizza",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "You’ve committed a heinous crime, what is your last meal?",
        food_choices1: "japanese/chinese food",
        food_choices2: "something with cheese",
        food_choices3: "dessert",
        food_choices4: "indian food",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "what is the purpose of food?",
        food_choices1: "to fill me up as cheap as possible",
        food_choices2: "flavor and nuance",
        food_choices3: "to experience diff flavors and spices",
        food_choices4: "not to die",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "How much are you trying to spend?",
        food_choices1: "ten bucks",
        food_choices2: "twenty bucks",
        food_choices3: "five bucks",
        food_choices4: "im ballin’ idgaf",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "Do you like spicy stuff?",
        food_choices1: "no man",
        food_choices2: "hell yes",
        food_choices3: "maybe a lil",
        food_choices4: "I'd rather have sweets",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "Sunday dinner is coming-what’re you making?",
        food_choices1: "Dinner? naw, dessert",
        food_choices2: "healthy food",
        food_choices3: "idk but cheese",
        food_choices4: "something saucy and spicy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "You’re super hungry and you enter the nearest strip mall, where are you goin?",
        food_choices1: "pizza spot",
        food_choices2: "indian joint",
        food_choices3: "pastry shop",
        food_choices4: "grocery for fresh ingredients",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "Go-to munchie food?",
        food_choices1: "chinese takeout",
        food_choices2: "cookies/brownies",
        food_choices3: "gotta have cheese",
        food_choices4: "vegi bro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "You have to eat one food for every meal for an entire month, which is it?",
        food_choices1: "burgers 4 days",
        food_choices2: "cakes/cookies",
        food_choices3: "fresh sushi",
        food_choices4: "chicken tikka masala",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "You're entering a food eating contest, what are you goin for?",
        food_choices1: "pizza",
        food_choices2: "tacos",
        food_choices3: "brownies",
        food_choices4: "assorted vegetables",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        food_question: "The best foods are...?",
        food_choices1: "green",
        food_choices2: "yellow (CHEESE)",
        food_choices3: "red/orange (saucy)",
        food_choices4: "multicolored",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('foods', null, {});
  }
};
