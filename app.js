const express = require("express");
const config = require("config");
const cors = require("cors");

const app = express();
const PORT = config.get("port") || 5000;

const { MongoClient } = require("mongodb");

const client = new MongoClient(config.get("mongoUri"));

app.use(cors());

// TODO: https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
async function start() {
  try {
    await client.connect();
    const db = client.db("mongoDB");
    // TODO: where to  call client.close() ?
    app.get("/", async (request, response) => {
      const table = db.collection("Table");
      const cursor = table.find();
      response.send(await cursor.toArray());
    });

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();

// async function start() {
//   try {
//     const db = await mongoose.connect(config.get("mongoUri"), {});

//     app.get("/", async (request, response) => {
//       const data = await db.Collection("Table").find().toArray();
//       console.log("data", data);
//       response.send("<h1>Hello</h1>");
//     });

//     app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
//   } catch (e) {
//     console.log("Server error", e.message);
//     process.exit(1);
//   }
// }

// start();
