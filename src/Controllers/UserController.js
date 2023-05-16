import User from "../Models/User.js"
import { generateId } from "../helpers/generateId.js";
import ConfirmEmail from "../emails/NewUserEmail.js";
import generateJWT from "../helpers/generateJWT.js";
import forgotPasswordEmail from "../emails/ForgotPassword.js";
import Client from "../Models/Clients.js";

// Add User 

const newUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if ([name, email, password].includes('')) {

            const error = new Error("All field are required");
            return res.status(403).json({ msg: error.message });
        }

        const UserExists = await User.findOne({ email: email.toLowerCase() });

        if (UserExists) {
            const error = new Error("The email is already taken");
            return res.status(403).json({ msg: error.message });
        }

        const addUser = await User({
            name,
            email: email.toLowerCase(),
            password,
            token: generateId()
        });

        // Send email

        await ConfirmEmail({ name, email, token: addUser.token });

        await addUser.save()

        return res.status(200).json({ msg: 'Check your email and confirm the account' });

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

// Confirm acount 

const userConfirm = async (req, res) => {

    try {

        const { token } = req.params

        if (!token) {
            const error = new Error('The token is invalid');
            return res.status(404).json({ msg: error.message })
        }

        const UserExists = await User.findOne({ token });

        if (!UserExists) {
            const error = new Error('The token is invalid');
            return res.status(404).json({ msg: error.message })
        }

        // Update Database

        UserExists.confirm = true

        UserExists.token = null

        await UserExists.save()

        // Send a response

        return res.status(200).json({ msg: "User confirmed successfully" })

    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}


// Forgot Password

const forgotPassword = async (req, res) => {

    try {

        const { email } = req.body

        if (!email || email == '') {

            const error = new Error("The email is required");
            return res.status(400).json({ msg: error.message });
        }

        const UserExists = await User.findOne({ email: email.toLowerCase() });

        if (!UserExists) {
            const error = new Error("The user does not exist");
            return res.status(404).json({ msg: error.message });
        }

        UserExists.token = generateId();

        await UserExists.save()

        await forgotPasswordEmail({ name: UserExists.name, email, token: UserExists.token })

        return res.status(200).json({ msg: 'Check your email' });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

// Update User

const updateUser = async (req, res) => {

    try {
        const { password: newPassword } = req.body

        if (!newPassword || newPassword == '') {

            const error = new Error("The password is required");
            return res.status(404).json({ msg: error.message });
        }

        const { token } = req.params

        const user = await User.findOne({ token })

        if (!user) {
            const error = new Error("The token is invalid");
            return res.status(404).json({ msg: error.message });
        }

        user.password = newPassword
        user.token = null

        await user.save()

        return res.status(200).json({ msg: "The password has been change" });


    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}


const checkToken = async (req, res) => {
    try {
        const { token } = req.params

        if (!token) {
            const error = new Error("The token is invalid");
            return res.status(404).json({ msg: error.message });
        }

        const user = await User.findOne({ token })

        if (!user) {
            const error = new Error("The token is invalid");
            return res.status(404).json({ msg: error.message });
        }

        return res.status(200).json({ msg: "Is valid", isValid: true });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }


}

// Login 

const Login = async (req, res) => {

    try {

        const { email, password } = req.body

        if (email == '' || password == '') {

            const error = new Error("All field are required");
            return res.status(401).json({ msg: error.message });
        }

        const UserExists = await User.findOne({ email: email.toLowerCase() });

        if (!UserExists || UserExists.confirm == false) {
            const error = new Error("The user does not exist or the account is not verified");
            return res.status(404).json({ msg: error.message });
        }

        //Validate Password

        const validatePassword = await UserExists.checkPassword(password)

        if (!validatePassword) {
            const error = new Error("The password is incorrect");
            return res.status(403).json({ msg: error.message });
        }


        await UserExists.save();

        const token = generateJWT({ id: UserExists._id })

        const response = {
            _id: UserExists._id,
            name: UserExists.name,
            email: email.toLowerCase(),
            token,
            createdAt: UserExists.createdAt
        }

        return res.status(200).json({ msg: 'Welcome', response });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}
//Home

const Home = (req, res) => {

    const { user } = req

    res.json(user)
}

//Edit User Profile

const editProfile = async (req, res) => {

    try {
        const { _id } = req.user

        const { name, password } = req.body

        const userUpdate = await User.findById(_id);

        userUpdate.password = password || userUpdate.password

        userUpdate.name = name || userUpdate.name

        await userUpdate.save()

        return res.status(200).json({ msg: "Updated User" })

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

// Add Client

const addClient = async (req, res) => {

    try {
        const { name, email, tel, price, tasks } = req.body

        if (!name || !email || !tel || !price || !tasks) {

            const error = new Error("All field are required");
            return res.status(403).json({ msg: error.message });
        }

        const addClient = await Client({ name, email, tel, price, tasks, userId: req.user._id });

        await addClient.save();

        return res.status(200).json({ msg: 'Add Successfully' });

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

//Get Cliens

const getClients = async (req, res) => {
    try {
        const clients = await Client.find({ userId: req.user._id });
        return res.json({ clients });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

//Delete Clients

const deleteClient = async (req, res) => {

    const { id } = req.params

    try {
        await Client.findByIdAndDelete(id);
        return res.status(200).json({msg : "Successfully deleted"});

    } catch (error) {
        return res.status(500).json({ msg: error.message });        
    }
}

export {
    newUser,
    userConfirm,
    forgotPassword,
    checkToken,
    updateUser,
    Login,
    Home,
    editProfile,
    addClient,
    getClients,
    deleteClient
}