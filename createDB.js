var MongoClient = require("mongodb").MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("baratroom");
database.dropDatabase()
database = client.db("baratroom");
const bara = database.collection("bara");
const result = await bara.insertOne({name:"Подпивасик"});
console.log(`bara ${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
