const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const createUserSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
});

const getUserParamSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = {
  validator,
  createUserSchema,
  getUserParamSchema,
};
