const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");
const userRouter = require("./controllers/user");
const workerRouter = require("./controllers/workers");
const recordsRouter = require("./controllers/records");
const authRouter = require("./controllers/auth");
const recordTypesRouter = require("./controllers/recordTypes");

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/workers", workerRouter);
app.use("/api/records", recordsRouter);
app.use("/api/recordtypes", recordTypesRouter);
module.exports = app;
