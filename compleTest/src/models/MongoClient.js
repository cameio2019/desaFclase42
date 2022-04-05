import mongoose from 'mongoose'

export default class MongoClient{
    constructor(){
        mongoose.connect(process.env.MONGO_URL)
    }
}

