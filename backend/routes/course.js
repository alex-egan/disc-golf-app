const router = require("express").Router();
let Course = require('../models/Course');
 
// This section will help you get a list of all the records.
router.route("/").get(function (req, res) {
  Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const currentLayout = req.body.currentLayout;
  const createdOn = Date.now();
  const createdBy = "afegan";
  const updatedOn = Date.now();
  const updatedBy = "afegan";
  const alternateLayouts = req.body.alternateLayouts;

  const newCourse = new Course({name, location, currentLayout, createdOn, createdBy, updatedOn, updatedBy, alternateLayouts});

  newCourse.save()
      .then(() => res.json('Course added'))
      .catch(err => res.status(400).json('Error: ' + err));
});
 
// This section will help you get a single record by id
router.route("/:id").get(function (req, res) {
 Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete(function (req, res) {
  Course.findByIdAndDelete(req.params.id)
        .then(() => res.json('Course deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Course.findById(req.params.id)
      .then(course => {
          course.name = req.body.name;
          course.location = req.body.location;
          course.currentLayout = req.body.currentLayout;
          course.updatedOn = Date.now();
          course.alternateLayouts = req.body.alternateLayouts;
          course.updatedBy = "afegan";

          course.save()
            .then(() => res.json('Exercise updated'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
 
module.exports = router;