import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("password", async function (next) {
  !this.isModified("password") && next()
  this.password = await bcrypt.hashSync(this.password, 10)
})

// Following function adds matchPassword method to userSchema that can be later accessed by instances of this model
// It receives enteredPassword as parameter which is then passed to bcrypt's compare method
// Which then takes the value and makes a comparison with the value of the field taken from model instance
// Finally, it returns a boolean value of true or false
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export const User = new mongoose.model("User", userSchema);
