const { DataTypes } = require("sequelize");
const sequelize = require("./user.connection");

const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "users",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = User;
