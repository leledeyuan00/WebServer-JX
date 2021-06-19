const express = require("express");

const app = express();

app.use(express.json())

app.use('/', express.static(__dirname + '/web'))
app.use('/web_en', express.static(__dirname + '/web_en'))
app.use('/downloads', express.static(__dirname + '/downloads'))

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
