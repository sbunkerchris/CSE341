const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
      console.log('Db is initialized');
    })
    .catch((err) => {
      callback(err);
      console.log('Db not initialized');
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  console.log('Db is retrieved');
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
