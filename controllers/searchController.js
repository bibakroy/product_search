const db = require("../db/db");

exports.searchKeyword = async (req, res) => {
  const { keyword } = req.query;

  try {
    const keywordArray = keyword.toLowerCase().split(" ");
    let queryString = "";
    keywordArray.map((key, index) => {
      if (index < keywordArray.length - 1) {
        queryString += `title LIKE '%${key}%' OR `;
      } else {
        queryString += `title LIKE '%${key}%'`;
      }
    });

    db.query(
      `SELECT * FROM product WHERE ${queryString}`,
      function (err, result, field) {
        if (err) throw err;
        const map = new Map();
        result.map((key, index) => {
          let count = 0;
          let subStringArray = key.title.split(" ");

          for (let i = 0; i < subStringArray.length; i++) {
            if (keywordArray.includes(subStringArray[i].toLowerCase())) {
              count++;
            }
          }

          map.set(key, count);
        });

        const sortedProducts = new Map(
          [...map.entries()].sort((a, b) => b[1] - a[1])
        );
        const products = Array.from(sortedProducts.keys());
        res.status(200).json(products);
      }
    );
  } catch (error) {
    console.log(error);

    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: error,
    });
  }
};
