import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'; // import user routes

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

app.use('/users', userRoutes); // use user routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});