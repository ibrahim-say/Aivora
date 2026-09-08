import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is not defined");
}

declare global {
  // eslint-disable-next-line no-var
  var mongodbClient: MongoClient | undefined;
}

const client =
  global.mongodbClient ??
  new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global.mongodbClient = client;
}

export default client;