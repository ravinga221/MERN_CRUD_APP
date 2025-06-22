const user = require("../Model/userModel"); 

const getAllUsers = async (req, res, next) => {
    let users; 

    try {
        users = await user.find(); 
    } catch (err) {
        console.log(err); 
    }

    // not found
    if (!users) {
        return res.status(404).json({ message: "Users not found" });
    }

    // display
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
