const router = require('express').Router();
const ctrl = require('../controllers/dashboardController');
const auth = require('../middleware/authMiddleware');

router.get('/summary', auth, ctrl.summary);

module.exports = router;