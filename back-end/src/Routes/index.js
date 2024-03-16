const UserRouter = require("./UserRoutes");

const routes = (app) => {
  app.use("/api/users", UserRouter);
};
module.exports = routes;
