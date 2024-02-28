import { HttpStatusError } from 'common-errors';
import jwt from 'jsonwebtoken';

import config from '../config.js';

import { getUserByName } from '../services/user-db-services.js';
import { checkHash } from '../utils/encrypt.js';

export  async function login(req, res, next){
    const { name, password } = req.body;

    const user =  await getUserByName(name);

    if(user){
        if(checkHash(password, user.password)){
            const userInfo = { id: user.id, name: user.name };
            const jwtConfig = { expiresIn: 60*60 };
            const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
            return res.send({token});
        }
    }

    throw new HttpStatusError(401, 'Invalid credentials');
}










