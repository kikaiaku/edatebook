module.exports = function(sequelize, DataTypes) {
    var Events = sequelize.define("Event", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      title: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      notes: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    return Events;
  };

