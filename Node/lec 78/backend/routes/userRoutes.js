const express = require("express");
const createUser = require("../controllers/userController");
const route = express.Router();




route.post("/users", createUser);

route.get("/users", async (req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        });
    }
});

route.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // db call
        console.log(id);

        const user = await User.findById(id);

        console.log(user);
        // console.log(user._id);
        // console.log(user.id);

        // const user1 = await User.findOne()

        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
            error: err.message,
        });
    }
});

route.patch("/users/:id", async (req, res) => {
    try {
        // db call
        const id = req.params.id;

        const { name, password, email } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, password, email },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            updatedUser,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        });
    }
});

route.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;


        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(200).json({
                success: false,
                message: "User not found",
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            deletedUser,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
        });
    }
});

module.exports = route