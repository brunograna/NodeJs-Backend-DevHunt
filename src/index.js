const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://localhost:27017/week10", {
    auth: { authSource: "admin" },
    user: "backend",
    pass: "secret",
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);