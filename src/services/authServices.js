const db = require("../models");
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

const authServices = {
  login: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const doctor = await db.Doctor.findOne({
          where: { email: data.email},
          raw: true
        })
        if(!doctor){
          resolve({
            status: 202,
            message: 'Could not find email',
            data: {}
          })
        }
        let validPassword = await bcrypt.compare(data.password, doctor.password);
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
        reject(error);
      }
    });
  }
}

export default authServices;