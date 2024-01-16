const router = require('express').Router();
const jobController = require('../controllers/jobControllers');

router.post('/', jobController.createJob);

router.get('/', jobController.getAllJobs);

//protected route because on agent can access to post, delete and update

router.get('/:id', jobController.getJob);

router.put('/:id', jobController.updateJob);

router.delete('/:id', jobController.deleteJob);





module.exports = router;