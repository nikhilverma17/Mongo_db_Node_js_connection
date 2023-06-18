const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
async function main() {
  // edit username,password, and cluster name
  // for local server 
  // const uri = "mongodb://127.0.0.1:27017/newdb2";
  //for Mongo Atlas
  const uri = "mongodb+srv://<username>:<password>@<clustername>.iy7zrhl.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // New Database Created
    const db = client.db('fruitsDB');

    //Adding Collection in database
    const fruitsCollection = db.collection('fruits');

    // Insert a single document
    // const fruit = { _id: 1, name: 'Mango', Price: '30' };
    // const result = await fruitsCollection.insertOne(fruit);
    // console.log('Inserted document:', result.insertedId);

    //  Find all documents
    // const allFruits = await fruitsCollection.find().toArray();
    // console.log('All fruits:', allFruits);
    //  Find documents matching a condition
    // const redFruits = await fruitsCollection.find({ color: 'Red' }).toArray();
    // console.log('Red fruits:', redFruits);
    
    
    // Update a single document
    // const result = await fruitsCollection.updateOne(
    //   { name: 'Mango' },
    //   { $set: { price: '50' } }
    // );
    // console.log('Updated document count:', result.modifiedCount);
    
    
    // Delete a single document
    // const result = await fruitsCollection.deleteOne({ name: 'Mango' });
    // console.log('Deleted document count:', result.deletedCount);

    // Perform other operations here

  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

main().catch(console.error);
