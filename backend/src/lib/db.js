import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
        // console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
}