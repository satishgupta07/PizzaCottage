const Joi = require("joi");

const registerController = {
    register(req, res, next) {
        
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            confirm_password: Joi.ref('password')
        })

        const {error} = registerSchema.validate(req.body);
        if(error) {
            return next(error);
        }

        res.json({msg: "Hello from Express"});
    }
}

module.exports = registerController;