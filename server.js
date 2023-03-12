import app from "./app.js";
import appConfig from "./src/config/app.config.js";

const port = appConfig.port || 8081;

const service = app.listen(port, () => {
  console.info(`Service listening requests on port ${port} 🖥️`);
});

service.on("error", (error) => {
  console.error("An error occurred");
  console.error(error);
});
