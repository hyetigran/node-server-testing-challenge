const express = require("express");
const helmet = require("helmet");
const userRouter = require("../users/usersRouter");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use("/api/users", userRouter);

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Testing!"
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Magic is happening on port: ${port}`);
});
