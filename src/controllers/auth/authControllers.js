import db from "../../models";

const { default: authServices } = require("../../services/authServices");
const { default: tokenController } = require("../token/tokenController");

const authControllers = {
  login: async (req, res) => {
    try {
      const { status, message, data } = await authServices.login(req.body);
      if(status === 200){
        const accessToken = tokenController.generateAccessToken(data);
        const refreshToken = tokenController.generateRefreshToken(data);
        await db.RefreshToken.create({
          token: refreshToken,
        });
        res.status(status).json({
          message: message,
          data: {
            ...data,
            accessToken,
            refreshToken
          },
        });
      }else{
        res.status(status).json({message:message});
      }
    } catch (error) {
      res.status(400).json({message:error});
    }
  },
  logout: async (req,res) => {
    try {
      const { status, message } = await authServices.logout(req.body.refreshToken);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}

export default authControllers;