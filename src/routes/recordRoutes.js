const router = require('express').Router();
const ctrl = require('../controllers/recordController');
const auth = require('../middleware/authMiddleware');
const rbac = require('../middleware/rbacMiddleware');

router.post('/', auth, rbac(['admin']), ctrl.create);
router.get('/', auth, ctrl.get);
router.delete('/:id', auth, rbac(['admin']), ctrl.delete);

module.exports = router;