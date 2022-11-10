const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_PASSWORD}@cluster0.ambheuq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);




app.get('/', (req, res) => {
    res.send('Food service server is running')
})

app.listen(port, () => {
    console.log(`Food service server running on ${port}`);
})

