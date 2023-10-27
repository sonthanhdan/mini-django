const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: "sqlite",
    storage: "users.sqlite",
    define: {
        freezeTableName: true
    },
    logging: console.log
});


module.exports = sequelize;
