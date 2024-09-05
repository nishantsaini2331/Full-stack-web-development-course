const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myFirstDatabase");
        console.log("Db Connected successfully");
    } catch (error) {
        console.log(error);
    }
}

const userSchema = new mongoose.Schema({
    name: String,

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
});

const User = mongoose.model("User", userSchema);

async function createUsers() {
    try {
        let newUser = await User.create({
            email: "nishant@gmail.com",
            password: "Nishant",
            name: "Nishant",
        });
        console.log(newUser);
    } catch (error) {
        console.log(error.code);
    }

    // let newUser = new User({
    //     email: "nishant@gmail.com 3",
    //     password: "Nishant 3",
    //     name: "Nishant 3",
    // });
    // await newUser.save()
    // const user = await User.findById("66ce0d69a3b1c084b880f6ff")
    // const user = await User.find({name : "Nishant"})
    // const user = await User.findByIdAndDelete("66ce0d5f07411d8232a9d718")
    // const user = await User.findByIdAndUpdate("66ce0d7bb8a38ff368ff8a19", {
    //     name: "Nishant updated again",
    // } , {new : true});
}

app.listen(3000, () => {
    console.log("server started");
    connectDb();
    createUsers();
});
