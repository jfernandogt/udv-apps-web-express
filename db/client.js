import { MongoClient, ServerApiVersion } from "mongodb";
// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ferbarrios:hZ0kZCxTpQ3PtR6d@cluster0.6v6itdx.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export let connection;

async function createConnection() {
  try {
    if (!connection) {
      console.log("no hay conexion");
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log("me conecté");
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Ya estoy conectado!");

      connection = client;
    }

    return connection;
  } catch (e) {
    console.log("error", e);
  }
}

export default createConnection;
