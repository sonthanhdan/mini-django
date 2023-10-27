const bootstrap = function (sequelize) {
  // Synchronize the model with the database
  sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        sequelize.sync().then(() => {
            console.log("Database and tables created!");
          });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", error);
    });
};

module.exports = {
  bootstrap,
};
