const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;

const url = "https://gorest.co.in/public/v1/users";

let apiData = {};

axios
  .get(url, {
    headers: {
      Authorization: process.env.BEARER_TOKEN,
    },
  })
  .then((response) => {
    apiData = response.data;
    if (response.status === 200) {
      console.log("Request Successfull");
    }
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
