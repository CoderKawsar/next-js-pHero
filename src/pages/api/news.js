const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://news-portal-user:txZEPSTB92R0YM3n@cluster0.otylb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Database connected successfully!");
    const newsCollection = client.db("news-portal-phero").collection("news");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({
        message: "success",
        status: 200,
        data: news,
      });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
