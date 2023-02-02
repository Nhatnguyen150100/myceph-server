import bcrypt from 'bcrypt';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

const doctorServices = {
  createNewDoctor: (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let hashed = await bcrypt.hash(data.password, salt);
				let emailDoctorExist = await db.Doctor.findOne({
					where: { email: data.email },
				});
				if (emailDoctorExist) {
					return resolve({
						status: false,
						message: 'Email was already exsit.'
					});
				}
				let newDoctor = await db.Doctor.create({
					email: data.email,
					password: hashed,
				});
				delete newDoctor.dataValues.password;
				resolve({
          status: true,
					message: 'Create new doctor successfully.',
					data: newDoctor.dataValues,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
  updateDoctorInformation: (id,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          birthday: data.birthday,
          avatar: data.avatar,
          phoneNumber: data.phoneNumber,
          description: data.description
        }
        const doctorUpdate = await db.Doctor.update(dataUpdate, {where: {id : id}});
        if(doctorUpdate){
          resolve({
            message: 'Update information of doctor successfully',
            data: doctorUpdate
          })
        }else{
          resolve({
            message: 'Update information of doctor failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default doctorServices;