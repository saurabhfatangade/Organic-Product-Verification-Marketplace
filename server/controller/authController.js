const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const users = JSON.parse(fs.readFileSync(usersFile));

        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);

        fs.writeFileSync(
            usersFile,
            JSON.stringify(users, null, 2)
        );

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const loginUser = (req, res) => {
    try {
        const { email, password } = req.body;

        const users = JSON.parse(fs.readFileSync(usersFile));

        const user = users.find(
            user => user.email === email
        );

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
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