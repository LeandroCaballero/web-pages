import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./router/router.routes.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

app.use(router);
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
