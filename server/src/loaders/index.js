import expressLoader from './express-loader.js';
import mongodbloader from './mongodb-loader.js';

export function init(server, config){
    mongodbloader(config.database);
    expressLoader(server);
}
