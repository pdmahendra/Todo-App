import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const signUp = async (req, res) => {
    const { name, email, password } = req.body

    try {

        if (!email && !name) {
            res.status(404).json({ message: 'All Fields Required' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // res.redirect('/login')
        res.status(201).json({ message: 'user signed up', user })

    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            res.status(404).json({ message: 'user not found' })
        }

        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(404).json({ message: 'invalid credentials' })
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            })
        // const options = {
        //     httpOnly: true,
        //     secure: true
        // }

        console.log(token);

        res.status(200).json({ messsage: 'user logged in', user, token })

    } catch (error) {
        console.log(error);
    }
}

const logout = async (req, res) => {
    res.status(200).send({ message: 'User logged out' });
}

export { signUp, login, logout }
