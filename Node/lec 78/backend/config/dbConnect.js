const mongoose = require("mongoose");



async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/blogDatabase");
        console.log("Db Conected successfully");
    } catch (error) {
        console.log("error aa gaya while connecting db");
        console.log(error);
    }
}


module.exports = dbConnect