const Joi = require('joi')

const loginSchema = Joi.object({
    email: Joi.string().required('email is required'),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const validateLoginMiddleware = (req, res, next) => {
    try {
        let {error, value} = loginSchema.validate(req.body)
        if (error) {
            res.status(400).json({message:error.details[0].message})
        } else {
            next()
        }
    } catch (error) {
       console.log(error)
       res.status(500).json({message: 'server error'}) 
    }
}

module.exports = validateLoginMiddleware