require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3333
const DB_URL = process.env.DB_URL

// Database connection
mongoose.set('strictQuery', false);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api',require('./routes'))
app.use('/uploads', express.static('uploads'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})