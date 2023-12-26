import { loginSchema, registerSchema } from "../validations/auth.validation.js";

class AuthController {
  /*
    PUBLIC POST METHODS
    Path: /auth/signup
    @body Full name, email, password
    */

  async signUp(req, res, next) {
    const { fullname, email, password } = req.body;
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    res.status(201).json(req.body);
  }

  /*
    PUBLIC POST METHODS
    Path: /auth/signin
    @body  email, password
    */

  async signIn(req, res, next) {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }


    res.status(200).json(req.body);
  }
}

const authController = new AuthController();

export default authController;
