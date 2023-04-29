import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true

    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    tokenAuth: {
        type: String,
        default: null
    },

    token: {
        type: String,
        default: null
    },

    confirm: {
        type: Boolean,
        default: false
    },

},
    {
        timestamps: true
    })


UserSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next()
    }

    const saltRouds = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, saltRouds)

});

UserSchema.methods.checkPassword = async function (passwordField) {
    return await bcrypt.compare(passwordField, this.password)
}

const User = mongoose.model('User', UserSchema)

export default User;