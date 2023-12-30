import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//load env variables
dotenv.config()

const app = express();
app.use(json());
const port = process.env.PORT;

//connect to mongoDB
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
//test db connection
database.on('error', (error) => {
   console.log(error)
})

database.once('connected', () => {
   console.log('Database Connected');
})

app.get('/status', (request, response) => {
    const status = {
       'Status': 'Running'
    };
    
    response.send(status);
 });

 app.get('/test', (request, response) => {
   const payload = {
      'Status': 'Running',
      "testValue" : 3
   };
   
   response.send(payload);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });