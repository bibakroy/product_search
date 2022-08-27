module.exports = function (app) {
  var searchController = require("./controllers/searchController");

  app.route("/api/search").get(searchController.searchKeyword);
};
