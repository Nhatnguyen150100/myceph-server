import passport from 'passport';
import localStrategy from 'passport-local';
const LocalStrategy = localStrategy.Strategy;

const { default: logger } = require("../../config/winston");
const { default: authServices } = require("../../services/authServices");

const passportJS = {
  verifyAccount: async (email, password, done) => {
    try {
      const { data, message } = await authServices.login(email,password);
      logger.passport.info(data);
      return done(null, data, message);
    } catch (error) { 
      logger.passport.error(error);
      return done(error)
    }
  },
  authenticate: (req,res,next) => {
    passport.authenticate('local', (error, data, message) => {
      if(error){
        return res.status(500).json({
          message: 'server error'
        })
      }
      if(!data){
        return res.status(401).json({
          message: message
        });
      }
      req.data = data;
      req.message = message;
      next();
    })(req, res, next);
  }
}

passport.use(new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, passportJS.verifyAccount));

export default passportJS;