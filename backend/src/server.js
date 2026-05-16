import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messagesRoutes from './routes/messages.routes.js';
import path from 'path';
import { dbConnection } from './lib/db.js';
dotenv.config();
const app = express();
app.use(express.json());

const __dirname =path.resolve() 
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use('/api/messages', messagesRoutes);

//make ready for deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist'))); 
  app.get('{*splat}', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  }); 
}

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to database, server not started:', error.message);
  }
};

startServer();