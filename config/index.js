import dotenv from "dotenv";
dotenv.config();
const config = {
  env: process.env["ENV"] ?? "dev",
  port: process.env["PORT"] ?? 5000,
};
export default config;
