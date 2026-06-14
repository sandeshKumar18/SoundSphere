import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

async function registerUser(req, res) {

    const { username, email ,password, role="user" } = req.body;

    const isUserExist = await userModel.findOne({ 

        $or : [
            { username : username },
            { email : email }
        ]
 
    });


    if (isUserExist) {
        return res.status(400).json({ message: 'Username or email already exists' });
    } 

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        role
    });

    const token = jwt.sign({
        id : user._id,
        role : user.role
    }, process.env.JWT_SECRET);

    res.cookie('token', token)

    res.status(201).json({
        message: 'User registered successfully',
        user : {
            id : user._id,
            username : user.username,
            email : user.email,
            role : user.role
        }
    });
}


async function loginUser(req,res) {
        const { username , email , password } = req.body;

        const user = await userModel.findOne({
            $or : [
                {username : username},
                {email : email}
            ]
        });

        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        };

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }   

        const token = jwt.sign({
            id : user._id,
            role : user.role
        }, process.env.JWT_SECRET);

        res.cookie('token', token);

        res.status(200).json({
            message: 'User logged in successfully', 
            user : {
                id : user._id,
                username : user.username,
                email : user.email,
                role : user.role
            }
        });

}

async function logoutUser(req,res) {

    res.clearCookie('token');

    res.status(200).json({
        message: 'User logged out successfully'
    });
}

export default { registerUser , loginUser , logoutUser };

