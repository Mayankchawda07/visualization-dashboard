const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connected = await mongoose.connect('mongodb+srv://mchawdap97:ozQsjYLeshjiF23c@cluster0.omqextz.mongodb.net/test')
        console.log('server connected')
    } catch (error) {
        console.log(`error:${error.message}`);
        process.exit(1);
    }
}

module.exports = dbconnect;