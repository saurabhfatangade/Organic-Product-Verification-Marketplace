const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const usersFile = path.join(__dirname, "../data/users.json");
const jwt = require("jsonwebtoken");
// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const users = JSON.parse(fs.readFileSync(usersFile));

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: Date.now(),
            name,
            email,
            password: hashedPassword,
            role: role || "user"
        };

        users.push(newUser);

        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

        res.status(201).json({
            success: true,
            message: "User Registered Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login (we'll complete this in the next step)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const users = JSON.parse(fs.readFileSync(usersFile));

        const user = users.find(user => user.email === email);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

      const token = jwt.sign(
    {
        id: user.id,
        email: user.email,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);

res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
    user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }
});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};