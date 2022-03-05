const express = require('express');
const router = express.Router();

const taskController = require('../app/controllers/TaskController');

router.delete('/:id', taskController.delete);
router.patch('/:id', taskController.edit);
router.patch('/isCompleted/:id', taskController.update);
router.post('/', taskController.create);
router.get('/', taskController.index);


module.exports = router;