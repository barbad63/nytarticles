import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey;
  

export default {
  // Gets all artcles
  srchArticles: function(query) { //api
    console.log(query);
    return axios.post("/api/search",   query );
  },
  searchArticles: function(query) {
    console.log(`${queryURLBase}${query}`);
    return axios.get(`${queryURLBase}${query}`)
  },
  getArticles: function() { //database
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) { //database
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    console.log(id);
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData); //The one I am working on
  }
};
