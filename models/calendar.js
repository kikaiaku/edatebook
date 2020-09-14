module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Event", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      date: DataTypes.DATE,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      // need to add logic that if null = Private
      classification: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    return Events;
  };