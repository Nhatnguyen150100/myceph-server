import logger from "../../config/winston";
import db from "../../models";

const { default: authServices } = require("../../services/authServices");
const { default: tokenController } = require("../token/tokenController");

const authControllers = {
  login: async (req, res) => {
    try {
      const { status, message, data } = await authServices.login(req.body);
      if(status === 200){
        await db.RefreshToken.update({
          isActive: false
        },{
          where: {
            idDoctor: data.id
          }
        })
        const accessToken = tokenController.generateAccessToken(data);
        const refreshToken = tokenController.generateRefreshToken(data);
        await db.RefreshToken.create({
          token: refreshToken,
          idDoctor: data.id,
          nameDevice: 'lap top',
          ipOfDevice: 'localhost',
          isActive: true
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
        logger.doctor.error(message);
        res.status(status).json({message:message});
      }
    } catch (error) {
      logger.doctor.error(error);
      res.status(400).json({message:'server error'});
    }
  },
  logout: async (req,res) => {
    try {
      const { status, message } = await authServices.logout(req.body.idDoctor,req.body.refreshToken);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: 'server error'
      })
    }
  }
}

export default authControllers;