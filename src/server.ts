import express from 'express';
import dotenv from  'dotenv';
import mysql from './config/mysql';
import router from './routes';

dotenv.config();
const connection = new mysql();



const app = express();

app.use(router);


app.listen(3000);
