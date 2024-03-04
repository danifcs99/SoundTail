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

export async function updateUser(email, nuevoUser) {
  const updatedUser = await User.findOneAndUpdate({email: email}, {$set: nuevoUser});
  if(updatedUser){
    return {success: true, message: 'User updated successfully'};
  }else {
    return {success: false, message: 'Error updating user'};
  }
}
