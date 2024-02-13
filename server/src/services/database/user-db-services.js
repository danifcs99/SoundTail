import User from "../../models/User.js";

export async function createUser(user){
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}
