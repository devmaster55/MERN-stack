const accountsRoutes = require("./accounts.routes");
  
const registerRoutes = app => {
  app.use("/api/v1", accountsRoutes);
};

const registerMiddlewares = app => {
  // app.use(helmet());
  // app.use(errorHandler);
};

module.exports = {
  registerRoutes,
  registerMiddlewares
};
  