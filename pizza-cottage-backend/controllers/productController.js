const multer = require("multer");
const fs = require('fs');
const path = require('path');
const Product = require("../models/product");
const CustomErrorHandler = require("../services/CustomErrorHandler");
const productSchema = require("../validators/productValidator");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(file.originalname)}`  

        cb(null, uniqueName);
    }
})

const handleMultipartData = multer({
    storage,
    limits: {fileSize: 1000000 * 5}
}).single('image'); // 5mb

const productController = {
    async store(req, res, next) {
        // Multipart form data
        handleMultipartData(req, res, async(err) => {
            if(err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
            const filePath = req.file.path;
            // validation
            const { error } = productSchema.validate(req.body);
            if(error) {
                //Delete the uploaded file
                fs.unlink(`${appRoot}/${filePath}`, (err) => {
                    if(err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                })

                return next(error);
                // rootfolder/uploads/filename.png
            }

            const { name, price, size } = req.body;
            let document;
            try {
                document = await Product.create({
                    name,
                    price,
                    size,
                    image: filePath
                })
            } catch(err) {
                return next(err);
            }

            res.status(201).json(document);

        })
    }
}

module.exports = productController;