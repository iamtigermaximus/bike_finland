import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  completed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
})
const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
