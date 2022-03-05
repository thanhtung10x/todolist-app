const tasks = require('./task');

function Router(app) {
    app.use('/api/tasks', tasks);
}

module.exports = Router;