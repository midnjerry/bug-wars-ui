const express = require("express");
const path = require("path");

const ngApp = express();
const buildPath = "./dist/bug-wars-ui";
ngApp.use(express.static(buildPath));

ngApp.get("/*", (request, response) => {
  response.sendFile(path.join(__dirname, buildPath + "/index.html"));
});

const port = process.env.NODE_ENV || 8080;
ngApp.listen(port, () => console.log(`Running on port ${port}`));
