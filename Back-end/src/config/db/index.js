const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const api = process.env.CONFIG_DATABASE;

async function connect() {
    try {
        await mongoose.connect(api);
        console.log('Connect to DB done!!!');
    } catch (err) {
        console.log('Connect to DB false!!!');
    }
}

module.exports = { connect };