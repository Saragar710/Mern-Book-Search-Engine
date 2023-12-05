
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI || 'mongodb://127.0.0.1:27017/googlebooks');
mongoose.connect(process.env.MONGOURI || 'mongodb://127.0.0.1:27017/book-search-engine');

module.exports = mongoose.connection;
