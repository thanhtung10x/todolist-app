const  Task = require('../models/Task');

class TaskController {


    //[GET] /api/tasks
    async index( req, res ) {
        try {
            const tasks = await Task.find();
            res.status(200).json({
                success: true,
                tasks
            });
        } catch ( err ) {
            console.error( err );
            res.sendStatus(500);
        }
    } 

    //[POST] /api/tasks
    async create( req, res ) {
        try {

            const { nameTask } = req.body;
    
            if( nameTask === undefined ){
                res.sendStatus(400);
            }
    
            const Tasks = new Task({ nameTask , isCompleted : false });
            const saveTask = await Tasks.save();

            if( saveTask ) {
                res.status(200).json({
                    success: true,
                    message: 'successful',
                    saveTask
                });
            }
        } catch ( err ) {
            console.error( err );
            res.sendStatus(500);
        }

    }

    //[PUT] /api/tasks/:id
    async update ( req, res ) {
        try {
            const task = await Task.findOneAndUpdate({ _id: req.params.id }, { isCompleted : req.body.isCompleted }, { new : true });
            if ( task ) {
                res.status(200).json({
                    success: true,
                    message: 'successful',
                    task
                });
            }
        } catch (err) {
            console.error( err );
            res.sendStatus(500);
        }
    }

    //[PATCH]/api/tasks/:id
    async edit(req, res) {
        try {
            const { nameTask} = req.body;
            console.log(nameTask);
            const editTask = await Task.findOneAndUpdate({ _id: req.params.id }, {nameTask: nameTask}, { new: true });
    
            if ( editTask ) {
                res.status(200).json({
                    success: true,
                    message: 'successful',
                    editTask
                });
            }
        } catch (err) {
            console.error( err );
            res.sendStatus(500);
        }
    }

    //[DELETE] /api/tasks/:id
    async delete (req, res) {
        try {
            const deleteTask = await Task.findOneAndDelete({_id: req.params.id});
            if (deleteTask) {
                res.status(200).json({
                    success: true,
                    message: 'successful',
                    deleteTask
                });
            }
        } catch (err) {
            console.error( err );
            res.sendStatus(500);
        }
    }
}

module.exports = new TaskController;