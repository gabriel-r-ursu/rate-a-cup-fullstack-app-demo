const express = require("express");
const app = express();
const port = 5000;
const getData = require('./api/read')

app.get("/api", (req, res) => {
getData.get( function(data) {
  res.status(200).send(data);
}, function(err){
  throw err;
})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});