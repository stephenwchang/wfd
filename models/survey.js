'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    food_question: DataTypes.STRING,
    food_choice1: DataTypes.STRING,
    food_choice2: DataTypes.STRING,
    food_choice3: DataTypes.STRING,
    food_choice4: DataTypes.STRING
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};