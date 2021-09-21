import express from "express";
import path from "path"
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const __dirname = path.__dirname(new URL(import.meta.url).pathname);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use((req, res, next) => {
  res.status(404).json({
    Message: "Route not found. Please return to previous page."
  });
});

app.listen(port, () => {
  console.log(`Listening at https://localhost:${port}`);
});
