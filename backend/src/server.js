import express from 'express';
const app = express();
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messagesRoutes from './routes/messages.routes.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use('/api/messages', messagesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});