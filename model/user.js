import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  car: String,
  income: String,
  city: String,
  quote: String,
  phone_price: String,
});

const User = mongoose.model("users", UserSchema);

export default User;
