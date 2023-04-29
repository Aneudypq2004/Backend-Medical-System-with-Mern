import express from 'express'
import dotenv from 'dotenv'
import db from './src/config/db.js';
import cors from 'cors'

//Routes
import UserRoutes from './src/Routes/UserRoutes.js';

//Settings


dotenv.config();

db()

const app = express();

//Allow json data in the app

app.use(express.json())

//allow request of the Frontend

let whiteList = [process.env.FRONT_URL];

const corsOption = {

  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== 1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }

}
app.use(cors(corsOption))

const PORT = process.env.PORT || 3000

//Routes

app.use('/', UserRoutes)

//
app.listen(PORT, () => {

  console.log(`Working on ${PORT}`)

})