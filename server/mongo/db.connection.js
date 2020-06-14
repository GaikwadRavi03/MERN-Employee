const mongoose = require('mongoose')
const dbConfig = require('./db.config')

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('successfully connect with ravi data base');
}).catch((err) => {
    console.log('not connect with DB, err :', err);
    process.exit();
})
