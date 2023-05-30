const Joi = require("joi");

const userCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  nama_lengkap: Joi.string().required(),
  alamat: Joi.string().required(),
  no_hp: Joi.number().integer().required(),
}).unknown();

const userUpdateSchema = Joi.object({
  id: Joi.number().integer().required(),
  email: Joi.string().required(),
  nama_lengkap: Joi.string().required(),
  alamat: Joi.string().required(),
  no_hp: Joi.number().integer().required(),
}).unknown();

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  nama_lengkap: Joi.string().required(),
  alamat: Joi.string().required(),
  no_hp: Joi.number().integer().required(),
});

module.exports = {
  userCreateSchema,
  userUpdateSchema,
  userLoginSchema,
  userRegisterSchema,
};
