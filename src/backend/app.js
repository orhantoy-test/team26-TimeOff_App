require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const teamsRouter = require("./API/teams");
const membersRouter = require("./API/members");
const timeoffRouter = require("./API/timeoff");
const buildPath = path.join(__dirname, "../../dist");
const cors = require("cors");

app.use(express.static(buildPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));


app.use("/api/teams", teamsRouter);
app.use("/api/members", membersRouter);
app.use("/api/timeoff", timeoffRouter);

// Handle every other route with index.html, which will serve the (compiled) React app.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;
