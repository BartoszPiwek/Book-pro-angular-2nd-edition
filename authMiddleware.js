const jwt = require("jsonwebtoken");

const APP_SECRET = "appsecret";
const USERNAME = "admin";
const PASSWORD = "password";

module.exports = (req, res, next) => {
  if (req.url == "/login" && req.method == "POST") {
    if (req.body != null && req.body.name == USERNAME && req.body.password == PASSWORD) {
      let token = jqs.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }
    res.end();
    return;
  }
};
