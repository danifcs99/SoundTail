import { User } from '../models/index.js';

export async function createUser(user) {
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}

export async function getUserByName(name) {
  const user = await User.findOne({ name });
  return user;
}


export async function getUsers(filters) {
  const users = await User.find(filters).select("-password")//El .select te quita el apartado contraseña de la peticion de Postman
  return users;
}

export async function deleteUser(filters) {
  const deletedUser = await User.deleteMany(filters);
  return deletedUser;
}
