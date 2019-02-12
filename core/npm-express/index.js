const express = require('express');

const app = express();

app.get("/", (req, res) => {
     res.send('Main page - express');
});

app.listen(4242, () => {
      console.log("Express server kører....");
});