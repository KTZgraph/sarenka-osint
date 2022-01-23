// helper który pomaga ustawić połaczenia z bazą
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  // dodac obsługę błedów
  const client = await MongoClient.connect(
    // hasło zmienione
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.xcwvd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    );

  return client;
}

export async function insertDocument(client, collection, document) {
  //pomocnicza
  const db = client.db(); //nie trzeb apodawać nazwy bazy bo jest już ona w connecting string

  const result = await db.collection(collection).insertOne(document); //zwraca promisa
  return result;
}