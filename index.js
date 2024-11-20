import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import controller from './controller/index.js'

const app = express();

const port = process.env.PORT || 3000;

const server = async () => {
  app.use(cors());
  app.use(express.json());

  controller(app)


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
}

server()