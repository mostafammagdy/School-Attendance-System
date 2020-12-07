const router = require('express').Router();
let Admins = require('../models/admins.model');

router.route('/').get((req, res) => {
  Admins.find()
    .then(adminss => res.json(adminss))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const regular = req.body.regular;

  const newAdmins = new Admins({
    username,
    password,
    regular,
  });

  newAdmins.save()
  .then(() => res.json('Admins added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Admins.findById(req.params.id)
      .then(admins => res.json(admins))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
Admins.findByIdAndDelete(req.params.id)
    .then(() => res.json('Admins deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Admins.findById(req.params.id)
    .then(admins => {
    admins.username = req.body.username;
    admins.password = req.body.password;
    admins.regular = req.body.regular;
    admins.save()
        .then(() => res.json('Admins updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;