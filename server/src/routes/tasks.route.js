const { Router } = require('express');
const { taskController } = require('../controllers/tasks.controller');

const router = Router();

router.get('/', taskController.getTasks);
router.post('/', taskController.addTask);
router.patch('/:id', taskController.restoreTask);
router.delete('/:id', taskController.removeTask);

module.exports = router;
