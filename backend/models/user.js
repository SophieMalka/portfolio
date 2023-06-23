const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "(usr_",
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        unique: "email_unique",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );
};
