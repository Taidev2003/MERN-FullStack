const UserRouter = require("./UserRoutes");
const ProductRouter = require("./ProductRouter");

const routes = (app) => {
  app.use("/api/users", UserRouter);
  app.use("/api/product", ProductRouter);
};
module.exports = routes;
