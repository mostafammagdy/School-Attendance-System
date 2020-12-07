const router = require('express').Router();
let Secretary = require('../models/secretary.model');

router.route('/').get((req, res) => {
    Secretary.find()
    .then(secretaries => res.json(secretaries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const regular = req.body.regular;

  const newSecretary = new Secretary({
    name,
    username,
    password,
    regular,
  });

  newSecretary.save()
  .then(() => res.json('Secretary added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Secretary.findById(req.params.id)
      .then(secretary => res.json(secretary))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    Secretary.findByIdAndDelete(req.params.id)
    .then(() => res.json('Secretary deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Secretary.findById(req.params.id)
    .then(secretary => {
    secretary.name = req.body.name;
    secretary.username = req.body.username;
    secretary.password = req.body.password;
    secretary.regular = req.body.regular;
    secretary.save()
        .then(() => res.json('Secretary updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;