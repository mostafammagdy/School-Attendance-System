const router = require('express').Router();
let Attendance = require('../models/attendance.model');

router.route('/').get((req, res) => {
  Attendance.find()
    .then(attendances => res.json(attendances))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const classname = req.body.classname;
  const name = req.body.name;
  const status = req.body.status;

  const newAttendance = new Attendance({
    classname,
    name,
    status,
  });

  newAttendance.save()
  .then(() => res.json('Attendance added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Attendance.findById(req.params.id)
      .then(attendance => res.json(attendance))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Attendance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attendance deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Attendance.findById(req.params.id)
    .then(attendance => {
    attendance.classname = req.body.username;
    attendance.name = req.body.name;
    attendance.status = req.body.status;
    attendance.save()
        .then(() => res.json('Attendance updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;