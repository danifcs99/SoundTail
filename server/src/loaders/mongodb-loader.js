import mongoose from "mongoose";
import logger from '../utils/logger.js';


export default async function(config){
  const url = `mongodb+srv://${config.database.user}:${config.database.password}@soundtail.t2lnrrg.mongodb.net/${config.database.dbName}?retryWrites=true&w=majority&appName=SoundTail`;
  try {
    await mongoose.connect(url);
    logger.info(`Connected to MongoDB at ${url}`);
  } catch (error) {
    logger.error(`Error connecting to MongoDB at ${url} \n${error}`);
  }
}
