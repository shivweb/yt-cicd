import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Default route
app.get("/", (req: Request, res: Response) => {
  return res.send("It's working good 🙌");
});

// ✅ NEW CI/CD TEST ROUTE
app.get("/cicd-test", (req: Request, res: Response) => {
  return res.json({
    message: "CI/CD is working 🚀",
    timestamp: new Date(),
    version: "v1.1",
  });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
