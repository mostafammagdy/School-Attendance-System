const router = require('express').Router();
let Classroom = require('../models/classroom.model');

router.route('/').get((req, res) => {
  Classroom.find()
    .then(classrooms => res.json(classrooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const classname = req.body.classname;

  const newClassroom = new Classroom({classname});

  newClassroom.save()
  .then(() => res.json('Classroom added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Classroom.findById(req.params.id)
      .then(classroom => res.json(classroom))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Classroom.findByIdAndDelete(req.params.id)
    .then(() => res.json('Classroom deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Classroom.findById(req.params.id)
    .then(classroom => {
    classroom.username = req.body.classname;
    classroom.save()
        .then(() => res.json('Classroom updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;