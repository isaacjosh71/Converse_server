const router = require('express').Router();
const {verifyToken, verifyAndAuth, verifyAgent} = require('../midddleware/verifyToken');
const userController = require('../controllers/userController');

//get user
router.get('/', verifyAndAuth, userController.getUser);


router.delete('/:id', verifyAndAuth, userController.deleteUser);


router.put('/', verifyAndAuth, userController.updateUser);

//skills

router.post('/skills', verifyAndAuth, userController.addSkills);

router.get('/skills', verifyAndAuth, userController.getSkills);

router.delete('/skills', verifyAndAuth, userController.deleteSkills);


module.exports = router;