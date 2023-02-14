import bcrypt from 'bcrypt';
import db from '../models';
import mailerServices from './mailerServices';
import jwt from 'jsonwebtoken';
import mailConfig from '../config/mail.config';

const salt = bcrypt.genSaltSync(10);

const doctorServices = {
  createNewDoctor: (email,password) => {
		return new Promise(async (resolve, reject) => {
			try {
				await db.Doctor.create({
					email: email,
					password: password,
				});
				resolve({
          status: 200,
					message: 'Create new doctor successfully.'
				});
			} catch (error) {
				reject(error);
			}
		});
	},
  resetPassword: (email,password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const update = await db.Doctor.update({
          password: password
        },
        {
          where: {
            email: email
          }
        }
        );
        if(update){
          resolve({
            status: 200,
            message: 'reset password successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'reset password failed'
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  sendVerifyEmailResetPassword: (data) => {
		return new Promise(async (resolve, reject) => {
			try {
        let hashEmail = jwt.sign({email:data.email},process.env.JWT_ACCESS_KEY,{expiresIn:60*3});
        let hashPassword = await bcrypt.hash(data.password, salt);
        mailerServices.sendMail(data.email,mailConfig.HTML_CONTENT_RESETPASSWOR,`${process.env.BASE_URL_SERVER}/v1/doctor/resetPassword?email=${data.email}&password=${hashPassword}&token=${hashEmail}`).then(sendMail =>{
          resolve({
            status: 200,
            message:'send verify mail successfully'
          })
        }).catch(err => reject({
          status: 500,
          message:'send verify mail failed'
        }))
			} catch (error) {
				reject(error);
			}
		});
	},
  sendVerifyEmail: (data) => {
		return new Promise(async (resolve, reject) => {
			try {
        let hashEmail = jwt.sign({email:data.email},process.env.JWT_ACCESS_KEY,{expiresIn:60*3});
        let hashPassword = await bcrypt.hash(data.password, salt);
        mailerServices.sendMail(data.email,mailConfig.HTML_CONTENT,`${process.env.BASE_URL_SERVER}/v1/doctor/verify?email=${data.email}&password=${hashPassword}&token=${hashEmail}`).then(sendMail =>{
          resolve({
            status: 200,
            message:'send verify mail successfully'
          })
        }).catch(err => reject({
          status: 500,
          message:'send verify mail failed'
        }))
			} catch (error) {
				reject(error);
			}
		});
	},
  getDoctorFromEmail: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const doctor = await db.Doctor.findOne({
          where: {
            email: email
          }
        })        
        if(doctor){
          delete doctor.password
          resolve({
            statusDoctor: true,
            messageDoctor: 'get information of doctor successfully',
            doctor: doctor
          })
        }else{
          resolve({
            statusDoctor: false,
            messageDoctor: 'get information of doctor failed',
            doctor: doctor
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  updateDoctorInformation: (idDoctor,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          fullName: data.fullName,
          gender: data.gender,
          birthday: new Date(data.birthday),
          avatar: data.avatar,
          phoneNumber: data.phoneNumber,
          speciality:data.speciality,
          diploma: data.diploma,
          position :data.position,
          description: data.description
        }
        const doctorUpdate = await db.Doctor.update(dataUpdate, {where: {id : idDoctor}});
        if(doctorUpdate){
          resolve({
            status: 200,
            message: 'Update information of doctor successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'Update information of doctor failed'
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getAllClinicFromDoctor: (idDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const listMember = await db.MemberOfClinic.findAll({
          where: {
            idDoctor: idDoctor
          }
        })
        let listClinic = [];
        for (let i = 0; i < listMember.length; i++) {
          const data = 
          listClinic.push(Object.assign(await db.Clinic.findOne({
            where: {
              id: listMember[i].idClinic
            }
          }),{roleOfDoctor: listMember[i].roleOfDoctor}))
        }
        if(listClinic.length >= 0) {
          resolve({
            status: 200,
            message: "Get all clinic successfully",
            data: listClinic
          })
        }else{
          resolve({
            status: 202,
            message: "Get all clinic failed",
            data: listClinic
          })
        }
      } catch (error) {
        reject(error);        
      }
    })
  }
}

export default doctorServices;