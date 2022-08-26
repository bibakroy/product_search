const getLinksModel = require("../models/searchModel");
const db = require("../db/db");

exports.searchKeyword = async (req, res) => {
  const keyword = req.params.keyword;
  try {
    const data = {
      keyword,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log(error);

    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: error,
    });
  }
};

exports.test = async (req, res) => {
  // const keyword = req.params.keyword;
  try {
    console.log("test");

    const result = await db.query("SELECT * FROM links");
    console.log({ result });
    res.status(200);
  } catch (error) {
    console.log(error);

    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: error,
    });
  }
};
