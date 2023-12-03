import { MongoClient, Database } from 'https://deno.land/x/mongo/mod.ts';

let db: Database;

export async function connect() {
    const client = new MongoClient();
    
    await client.connect('mongodb+srv://vladsto101:Salamur12@course.rgce3bw.mongodb.net/?authMechanism=SCRAM-SHA-1');
    
    db = client.database('todo-app');
}

export function getDb() {
    return db;
}
