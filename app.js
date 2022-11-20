var express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    firstName: "<Your First Name>",
    lastName: "<Your Last Name>",
    email: "<Your email>",
    password: "<Password>"
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.post("/login", function (req, res) {
  //write request to mongodb to check for a user
  /**
   * Write request to mongodb to check for a user
   * If a user is found use res.send() to send a JSON response
   * back to the browser
   * Use https://data.mongodb-api.com/app/data-spnrn/endpoint/data/v1/action/findOne
   * endpoint with your api key
   */
  /**
   * request
   * {
   *       "dataSource": "Cluster0",
   *       "database": "IST256",
   *       "collection": "IST",
   *       "filter": {"_id": "<user email>", "password": "<user password>"}
   *   }
   */
  //if found response
  /**
    * {
    *      "document": {
    *           "_id": "<user email>",
    *           "password": "<user password>"
    *       }
    *   }

    */
});

app.post("/register", function (req, res) {
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var password = req.body.password;

  var newuser = new User();
  newuser.email = email;
  newuser.firstName = firstName;
  newuser.lastName = lastName;
  newuser.password = password;
  newuser.save(function (err, savedUser) {
    if (err) {
      console.log(err);
      return res.status(3000).send();
    }
  });
});
