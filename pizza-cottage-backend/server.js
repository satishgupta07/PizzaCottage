require('dotenv').config()
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3333

app.use(express.json());
app.use('/api',require('./routes'))

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})