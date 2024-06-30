const { MongoClient } = require('mongodb');



let db; 
const url = 'mongodb://alumni:alumni@ac-plr61ft-shard-00-00.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-01.wqjmazy.mongodb.net:27017,ac-plr61ft-shard-00-02.wqjmazy.mongodb.net:27017/?replicaSet=atlas-73oxf6-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'test';

// Function to connect to MongoDB
async function dbconnect() {
  if (db) return db; // Return if already connected
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Connection error:', err);
    throw new Error('Internal Server Error. Please try again later.'); // Throw an error to be handled by the caller
  }
}

// Function to fetch data from a collection based on a query
async function getdata(collname, query) {
  try {
    const database = await dbconnect();
    const output = await database.collection(collname).find(query).toArray( );
    return output;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw new Error('Error fetching data from the database.');
  }
}

// Function to find a single record in a collection based on a query
async function record(collname, query) {
  try {
    const database = await dbconnect();
    const output = await database.collection(collname).findOne(query);
    console.log(query) // Use findOne to get a single document
    if (!output) {
      throw new Error('User not found. Please provide valid details.');
    }
    return output; // Return the retrieved document
  } catch (err) {
    console.error('Error finding record:', err);
    throw new Error('User not found. Please provide valid details.');
  }
}

module.exports = {
  dbconnect,
  getdata,
  record,
};
