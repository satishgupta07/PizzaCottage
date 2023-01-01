const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config();
const APP_URL = process.env.APP_URL;

const productSchema = new Schema({
    name: { type: String, required: true},
    price: { type: String, required: true, unique: true},
    size: {type: String, required: true},
    image: {type: String, required: true, get: (image) => {
        return `${APP_URL}/${image}`
    }}
}, { timestamps: true, toJSON: {getters: true}, id: false });

module.exports = mongoose.model('Product', productSchema);