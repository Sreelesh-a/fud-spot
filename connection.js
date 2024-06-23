const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "fudSpot";
let db = null;

async function connect() {
  if (db) {
    return db;
  }

  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
  console.log("Connected successfully to server");
  return db;
}

module.exports = { connect };
