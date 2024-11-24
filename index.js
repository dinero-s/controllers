import express from 'express';
import cors from 'cors';
import 'dotenv/config';
//import controller from './controller/index.js'
import router from "./router/user.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//controller(app)

app.use('/user', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})