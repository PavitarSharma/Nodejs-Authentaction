import Joi from "joi";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const registerSchema = Joi.object({
  fullname: Joi.string().required().min(2).max(30).messages({
    "string.base": "Full name should be a string",
    "any.required": "Full name is required!",
    "string.min": "Name should contain at least 2 characters",
    "string.max": "Name should contain at most 30 characters",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email should be a string",
    "any.required": "Email is required!",
    "string.email": "Invalid Email",
  }),

  password: Joi.string()
    .required()
    .pattern(new RegExp(passwordRegex))
    .messages({
      "string.base": "Password should be a string",
      "any.required": "Password is required!",
      "string.pattern.base":
        "Password should contain at least 8 characters, one letter, one number, and one special character",
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a string",
    "any.required": "Email is required!",
    "string.email": "Invalid Email",
  }),

  password: Joi.string()
    .required()
    .pattern(new RegExp(passwordRegex))
    .messages({
      "string.base": "Password should be a string",
      "any.required": "Password is required!",
      "string.pattern.base":
        "Password should contain at least 8 characters, one letter, one number, and one special character",
    }),
});
