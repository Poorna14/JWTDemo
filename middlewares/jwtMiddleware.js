const jwt = require("jsonwebtoken");

//Middleware to send request with jwt token
module.exports = function(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied!");

  try {
    const verified = jwt.verify(token, "abcdefghijklmn");
    // req.user = verified; //can use user id from token to pull out data from db
    next();
  } catch (err) {
    res.status(400).send("Invalid token!");
  }
};
