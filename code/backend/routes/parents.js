const router = require('express').Router();
let Parent = require('../models/parent.model');

router.route('/').get((req, res) => {
  Parent.find()
    .then(parents => res.json(parents))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const student = req.body.student;

  const newParent = new Parent({
    name,
    username,
    password,
    student,
  });

  newParent.save()
  .then(() => res.json('Parent added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Parent.findById(req.params.id)
      .then(parent => res.json(parent))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Parent.findByIdAndDelete(req.params.id)
    .then(() => res.json('Parent deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Parent.findById(req.params.id)
    .then(parent => {
    parent.name = req.body.name;
    parent.username = req.body.username;
    parent.password = req.body.password;
    parent.student = req.body.student;
    parent.save()
        .then(() => res.json('Parent updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;