const User = require("../models/userSchema");

async function createUser(req, res) {
    const { name, password, email } = req.body;

    try {
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Please enter the name",
            });
        }
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Please enter the password",
            });
        }

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Please enter the email",
            });
        }

        const checkForexistingUser = await User.findOne({ email });

        if (checkForexistingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered with this email",
            });
        }

        const newUser = await User.create({
            name,
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            newUser,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Please try again",
            error: err.message,
        });
    }
}


module.exports = createUser
