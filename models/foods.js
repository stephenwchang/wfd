'use strict';
module.exports = (sequelize, DataTypes) => {
  const Foods = sequelize.define('Foods', {
    food_question: DataTypes.STRING,
    food_choices1: DataTypes.STRING,
    food_choices2: DataTypes.STRING,
    food_choices3: DataTypes.STRING,
    food_choices4: DataTypes.STRING
  }, {});
  Foods.associate = function(models) {
    // associations can be defined here
  };
  return Foods;
};
