const getProfile = (req, res) => {
    res.status(200).json({
        success: true,
        user: {
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        }
    });
};

module.exports = {
    getProfile
};