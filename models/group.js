module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Group", {
      id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      middleInitial: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.DATE,
      comments: DataTypes.STRING,
      userId: DataTypes.INTEGER
    });
    Groups.associate = function(models) {
      // We're saying that a Expense should belong to an Category
      // An expense can't be created without an Category due to the foreign key constraint
      Groups.belongsTo(models.GroupName, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Groups;
  };
