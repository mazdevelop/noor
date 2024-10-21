import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI);

let db;

async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db();
    }
    return db;
}

export { connectToDatabase };
