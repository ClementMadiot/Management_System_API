// Description: This file contains the middleware functions for authentification the user.
// how it's work: Someone is making a request getUser details -> authorize middleware -> verify -> if valid -> getUser details
// if not valid -> return error message

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

export const authorize = async (req, res, next) => {
  try {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1];
    }
    // check if the token exists
    if(!token) return res.status(401).json({ message: 'Unauthorized' });

    // verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // check if the user exists
    const user = await User.findById(decoded.userId);
    // if it doesn't exist, return an error message
    if(!user) return res.status(401).json({ message: 'Unauthorized' });

    // if the user exists, assign the user to the req object
    req.user = user;

    next();
  } catch (error) {
    next(error);
    res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
    
  }
}