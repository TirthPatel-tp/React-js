const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"  // Path to the database in local

const connectToMongo = ()=> {  // function to connect to mongo
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;