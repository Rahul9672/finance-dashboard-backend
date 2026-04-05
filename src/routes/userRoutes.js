const router = require('express').Router();
const ctrl = require('../controllers/userController');

router.post('/', ctrl.createUser);
router.get('/', ctrl.getUsers);

module.exports = router;