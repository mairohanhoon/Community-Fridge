import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // Hashed
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["donor", "ngo"],
    required: true,
  }
}, {timestamps: true});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
