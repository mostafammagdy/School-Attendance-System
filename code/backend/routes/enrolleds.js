const router = require('express').Router();
let Enrolled = require('../models/enrolled.model');

router.route('/').get((req, res) => {
  Enrolled.find()
    .then(enrolleds => res.json(enrolleds))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const role = req.body.role;
  const classname = req.body.classname;

  const newEnrolled = new Enrolled({
    name,
    role,
    classname,
  });

  newEnrolled.save()
  .then(() => res.json('Enrolled added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Enrolled.findById(req.params.id)
      .then(enrolled => res.json(enrolled))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Enrolled.findByIdAndDelete(req.params.id)
    .then(() => res.json('Enrolled deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Enrolled.findById(req.params.id)
    .then(enrolled => {
    enrolled.name = req.body.name;
    enrolled.role = req.body.role;
    enrolled.classname = req.body.classname;
    enrolled.save()
        .then(() => res.json('Enrolled updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
