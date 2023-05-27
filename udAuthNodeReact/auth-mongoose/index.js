require("dotenv").config(); //console.log("DB_USER:", process.env.DB_USER);

const express = require("express"), app = express();
const path = require('path'), PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser"), cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const databaseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
  `@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
let query = {};
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log("Database connected"); })
.catch(err => console.log(`Database connection error ${err.message}`));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const routes = require("./routes"); app.use(routes);
//app.get("/", (req, res) => { res.send("Hello"); });

app.use(express.static(path.join(__dirname, 'react-js', 'build')));
app.get('*',  async (req, res) => {
  res.sendFile(path.join(__dirname, 'react-js', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
