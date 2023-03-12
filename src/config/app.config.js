import dotenv from "dotenv";

dotenv.config();

const appConfig = {
  port: process.env.PORT || 8080,
  cors: {
    methods: ["GET"],
    origins: ["http://localhost:5000"],
  },
};

export default appConfig;
