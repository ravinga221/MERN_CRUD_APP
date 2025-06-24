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


//data insert
const addUsers = async(req, res,next) => {
    const {name, gmail, age, address} =req.body;

    let users;

    try{
        users = new user({name, gmail, age, address});
        await users.save();
    }catch (err)
    {
        console.log(err);
    }

    // not insert users
    if (!users) {
        return res.status(404).json({ message: "Unable to add users" });
    }

     return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
