import express from 'express';
import dotenv from 'dotenv';
import userRouter from './Routers/user.router.js';
import './Database/config.js'; // Connect to MongoDB

const app = express();

dotenv.config();

app.use(express.json());

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
