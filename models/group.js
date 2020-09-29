module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Group", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      groupName: DataTypes.STRING,
      contactName: DataTypes.STRING,
      contactAddress: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    return Groups;
  };