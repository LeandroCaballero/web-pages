import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import router from "./router/router.routes.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
