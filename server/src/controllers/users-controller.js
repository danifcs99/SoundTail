import { getUserByName, createUser, getUsers } from "../services/user-db-services.js";
import { encryptPassword } from "../utils/encrypt.js";

export async function createUserController(req, res, next) {
  try {
    const body = req.body;
    body.password  = await encryptPassword(body.password);
    const user = await createUser(body);
    return res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      error.status = 409;
    }
    if(error.message.includes("validation")){
      error.status = 400;
    }
    next(error);
  }
}

export async function getUserByNameController(req, res, next) {
  try {
    const user = await getUserByName(req.params.name);
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

export async function getUsersController(req, res, next) {
  try {
    const filters = req.query;
    const users = await getUsers(filters);
    return res.status(200).send(users);
  } catch (error) {
    next(error);
  }
}
