require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');

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

app.use(express.json());
app.use('/api',require('./routes'))

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})