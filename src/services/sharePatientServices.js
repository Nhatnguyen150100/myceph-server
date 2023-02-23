const db = require("../models");

const sharePatientServices = {
  sharePatient: (data,idSharedPatient,idOwnerDoctor) =>{
    return new Promise(async (resolve,reject) =>{
      try {
        if(data.idSharedPatientOfDoctor){
          const addPatient = await db.SharePatient.create({
            idSharedPatient: idSharedPatient,
            idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
            idOwnerDoctor: idOwnerDoctor,
            roleOfOwerDoctor: 'view'
          })
          if(addPatient){
            resolve({
              status: 200,
              message: 'patient shared successfully'
            })
          }else{
            resolve({
              status: 202,
              message: 'patient shared failed'
            })
          }
        }else{
          const addPatient = await db.SharePatient.create({
            idSharedPatient: idSharedPatient,
            idSharedPatientOfClinic: data.idSharedPatientOfClinic,
            idOwnerDoctor: idOwnerDoctor,
            roleOfOwerDoctor: 'view'
          })
          if(addPatient){
            resolve({
              status: 200,
              message: 'patient shared successfully'
            })
          }else{
            resolve({
              status: 202,
              message: 'patient shared failed'
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  removeSharePatient: (data,idSharedPatient,idOwnerDoctor) =>{
    return new Promise(async (resolve,reject) =>{
      try {
        if(data.idSharedPatientOfDoctor){
          const checkDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkDoctor){
            await db.SharePatient.destroy({
              where: {
                idSharedPatient: idSharedPatient,
                idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                idOwnerDoctor: idOwnerDoctor
              },
              force: true
            })
            resolve({
              status: 200,
              message: "remove patient shared by doctor successfully"
            })
          }else{
            resolve({
              status: 202,
              message: "can't found patient shared by doctor"
            })
          }
        }else{
          const checkClinic = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfClinic: data.idSharedPatientOfClinic,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkClinic){
            await db.SharePatient.destroy({
              where: {
                idSharedPatient: idSharedPatient,
                idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                idOwnerDoctor: idOwnerDoctor
              },
              force: true
            })
            resolve({
              status: 200,
              message: "remove patient shared by clinic successfully"
            })
          }else{
            resolve({
              status: 202,
              message: "can't found patient shared by clinic"
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  updateRoleOfOwnerDoctor: (data,idSharedPatient,idOwnerDoctor,roleOfOwnerDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        if(data.idSharedPatientOfDoctor){
          const checkIsPatientOfDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkIsPatientOfDoctor){
            await db.SharePatient.update({
              roleOfOwnerDoctor: roleOfOwnerDoctor
            },{
              where: {
                idSharedPatient: idSharedPatient,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: 'update role of owner doctor'
            })
          }else{
            resolve({
              status: 202,
              message: 'doctor is not admin of patient'
            })
          }
        }else{
          const checkIsPatientOfDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfClinic: data.idSharedPatientOfClinic
            }
          })
          if(checkIsPatientOfDoctor){
            await db.SharePatient.update({
              roleOfOwnerDoctor: roleOfOwnerDoctor
            },{
              where: {
                idSharedPatient: idSharedPatient,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: 'update role of owner doctor'
            })
          }else{
            resolve({
              status: 202,
              message: 'clinic is not admin of patient'
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getDoctorSharedPatient: (idSharedPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const listDoctor = await db.Doctor.findAll({
          include: [{
            model: db.SharePatient,
            where: {
              idSharedPatient: idSharedPatient
            }
          }]
        })
        if(listDoctor){
          resolve({
            status: 200,
            message: 'get doctor share patient successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'get doctor share patient failed'
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default sharePatientServices