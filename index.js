const express = require("express");
const livereload = require("livereload");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

if (app.get("env") === "development") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "public"));

  app.use(require("connect-livereload")());

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("public");
    }, 100);
  });
}
app.use(express.static("public"));

app.get("/form", (req, res) => {
  console.log(req);
  console.log(res);
  res.status(201);
  res.send("OK");
});

app.post("/form", bodyParser.json(), (req, res) => {
  console.log(req.body);
  console.log(res.body);
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
