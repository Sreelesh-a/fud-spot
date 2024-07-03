// const { MongoClient } = require("mongodb");

// // Connection URL
// const url = "mongodb://localhost:27017"; // Replace with your MongoDB server URL if different
// const client = new MongoClient(url);

// // Database Name
// const dbName = "fudSpot"; // Replace with your database name

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   const collection = db.collection("restList"); // Replace with your collection name

//   // Example operation: Insert a document
//   // const insertResult = await collection.insertOne({
//   //   name: "John Doe",
//   //   age: 30,
//   // });
//   // console.log("Inserted document:", insertResult.insertedId);

//   // Example operation: Find a document
//   const findResult = await collection.findOne({ name: "Chinese Wok" });
//   console.log("Found document:", findResult);

//   // Close the connection
//   await client.close();
// }

// main().catch(console.error);
