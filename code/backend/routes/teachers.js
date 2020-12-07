const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teachers => res.json(teachers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const regular = req.body.regular;

  const newTeacher = new Teacher({
    name,
    username,
    password,
    regular,
  });

  newTeacher.save()
  .then(() => res.json('Teacher added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {

  const {username, password} = req.body;
  Teacher.findOne({username})
  .then(teacher => {
    if (teacher.password !== password){
      return res.status(204).json('Username and password do not match');
    }else{
      return res.status(200).json('Login successful');
    }

  })
  .catch(err => res.status(400).json('Error: User not found ' + err));



});

router.route('/:id').get((req, res) => {
    Teacher.findById(req.params.id)
      .then(teacher => res.json(teacher))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Teacher deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Teacher.findById(req.params.id)
    .then(teacher => {
    teacher.name = req.body.name;
    teacher.username = req.body.username;
    teacher.password = req.body.password;
    teacher.regular = req.body.regular;
    teacher.save()
        .then(() => res.json('Teacher updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;