module.exports = function (app) {
  var searchController = require("./controllers/searchController");

  app.route("/api/search/:keyword").get(searchController.searchKeyword);
  app.route("/api/test").get(searchController.test);
};
