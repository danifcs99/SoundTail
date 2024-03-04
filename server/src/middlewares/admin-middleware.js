import jwt from 'jsonwebtoken';
import { HttpStatusError } from 'common-errors';
import config from '../config.js';

export function isAdmin(req, res, next) {
    const {authorization} = req.headers;

    if(!authorization) throw HttpStatusError(401, 'No token provided');

    const [_bearer, token] = authorization.split(' ');

    try {
      const decoded = jwt.verify(token, config.app.secretKey);

      if (decoded.role === "admin") {
        next();
      } else {
        throw new HttpStatusError(403, 'Acceso no autorizado');
      }
    } catch (error) {
        res.status(401).json({ error: 'Token no válido o no es administrador' });
    }
}

export default isAdmin;
