const axios = require("axios");
const router = require("express").Router();

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
let searchTerm = "";
let numResults = 0;
let startYear = 0;
let endYear = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey;
  

// Counter to keep track of article numbers as they come in
let articleCounter = 10;


router.post("/search", (req, res) => {
  console.log(`${queryURLBase}&q=${req.body.q}`);
  axios
   .get(`${queryURLBase}&q=${req.body.q}`)
    // .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(data => {
      console.log(data);
      // res.send(200);
      res.json(data);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;