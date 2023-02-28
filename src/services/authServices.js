const db = require("../models");
import bcrypt from 'bcrypt';
import logger from '../config/winston';
import refreshToken from '../controllers/token/refreshTokenController';

const salt = bcrypt.genSaltSync(10);

const authServices = {
  login: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const doctor = await db.Doctor.findOne({
          where: { email: data.email},
          raw: true
        })
        logger.doctor.info(doctor);
        if(!doctor){
          resolve({
            status: 202,
            message: 'Could not find email',
            data: {}
          })
        }
        let validPassword = await bcrypt.compare(data.password, doctor.password);
        logger.doctor.info(validPassword);
        if(!validPassword){
          resolve({
            status: 202,
            message: 'wrong password',
            data: {}
          })
        }else{
          delete doctor.password;
          resolve({
            status: 200,
            message: 'login successfully',
            data: doctor
          });
        }
      } catch (error) {
        logger.doctor.error(error);
        reject(error);
      }
    });
  },
  logout: (idDoctor,refreshToken) => {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await db.RefreshToken.findOne({
          where: {
            idDoctor: idDoctor,
            token: refreshToken
          }
        })
        logger.token.info(token);
        if(token){
          await db.RefreshToken.update({
            isActive: false
          },
          {
            where: {
              idDoctor: idDoctor,
              token: refreshToken
            },
            force: true
          })
          resolve({
            status: 200,
            message: 'logout successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'logout failed'
          })
        }
      } catch (error) {
        logger.token.error(error);
        reject(error);
      }
    })
  }
}

export default authServices;