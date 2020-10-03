module.exports = function(sequelize, DataTypes) {
    var GroupNames = sequelize.define("GroupName", {
      id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
      groupName: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    GroupNames.associate = function(models) {
        // Associating Catergories with Expense
        //
        GroupNames.hasMany(models.Group, {
          onDelete: "cascade"
        });
      };

    return GroupNames;
  };