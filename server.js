console.clear();
// import express
const express = require("express");
const connectDB = require("./config/connectDB");
const userRouter = require("./router/user");
const productRouter = require("./router/product");
const orderRouter = require("./router/Order");
const path = require("path");

// instance app
const app = express();
require("dotenv").config();

connectDB();

// router
// user
//
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// PORT
const PORT = process.env.PORT;

// create server
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
