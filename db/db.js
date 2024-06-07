const mongoose =  require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}`;

const conectarDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("BD conectada correctamente..!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDb;

//conectarDb();