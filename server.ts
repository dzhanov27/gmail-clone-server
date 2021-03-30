import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import mailsRouter from './routes/mail.route';

const app = express();
const PORT = process.env.PORT || 5000;
const uri: any = process.env.MONGODB_URI;

// middlweares
app.use(cors());
app.use(express.json());

// route middlewares
app.use('/api/mails', mailsRouter);

// server and db
async function start() {
  try {
    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => {
        console.log('Connected to DB!');
      }
    );

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
