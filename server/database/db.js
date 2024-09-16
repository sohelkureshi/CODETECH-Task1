
import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://localhost:27017/blog`; // Ensure 'blog' is your correct database name
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
};

export default Connection;
