const router = require("express").Router();
let User = require('../models/User');

// This section will help you get a list of all the records.
router.route("/").get(function (req, res) {
  User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const currentRound = req.body.currentRound;
  const roundHistory = req.body.roundHistory;

  const newUser = new User({username, name, currentRound, roundHistory});

  console.log(newUser);

  newUser.save()
      .then(() => res.json('User added'))
      .catch(err => res.status(400).json('Error: ' + err));
});
 
// This section will help you get a single record by id
router.route("/:id").get(function (req, res) {
 User.findOne({'username': req.params.id})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete(function (req, res) {
  User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
          user.username = req.body.username;
          user.name = req.body.name;
          user.currentRound = req.body.currentRound;
          user.roundHistory = req.body.roundHistory;

          user.save()
            .then(() => res.json('User updated'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
 
module.exports = router;