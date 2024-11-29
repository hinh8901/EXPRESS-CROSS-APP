import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'cross'

const dbConnection = async () => {
  await client.connect()
  const dbConnection = client.db(dbName)
  return dbConnection
}

export const usersCollection = dbConnection().then(connection => connection.collection('users'))

