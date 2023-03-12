import e from "express";
import cors from "cors";
import FakeUserRouter from "./src/routes/fakeUser.router.js";
import FakeImageUrlRouter from "./src/routes/fakeImageUrl.router.js";
import FakeProductRouter from "./src/routes/fakeProduct.router.js";
import appConfig from "./src/config/app.config.js";

const app = e();

// App middlewares
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(
  cors({
    methods: appConfig.cors.methods,
    origin: /localhost/gi,
  })
);

// Routes
app.use("/api/mocks/users", FakeUserRouter);
app.use("/api/mocks/images", FakeImageUrlRouter);
app.use("/api/mocks/products", FakeProductRouter);

export default app;
