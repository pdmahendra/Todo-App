import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }]
}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)

export default userModel;
