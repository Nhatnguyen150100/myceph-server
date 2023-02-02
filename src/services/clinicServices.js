import db from "../models";

const clinicServices = {
  getAllClinic : () => {
    return new Promise(async (resolve, reject) => {
      try {
        const listClinic = await db.Clinic.findAll();
        resolve({
          message: "Get all clinic successfully",
          data: listClinic
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }

    });
  },
  getAllDoctorInClinic: (idClinic) => {
    return new Promise(async (resolve, reject) => {
      try {
      } catch (error) {
        
      }
    })
  },
  createNewClinic: (idAdminDoctor,data) =>{
    return new Promise(async (resolve, reject) => {
      try {
        const checkNameClinicExists = await db.Clinic.findOne({
          where:{
            nameClinic: data.nameClinic
          }
        })
        if(checkNameClinicExists){
          resolve({
            status: false,
            message: 'Name of clinic is already in use'
          })
        }else{
          const newClinic = await db.Clinic.create({
            nameClinic: data.nameClinic,
            emailClinic: data.emailClinic,
            phoneNumberClinic: data.phoneNumberClinic,
            avatarClinic: data.avatarClinic,
            addressClinic: data.addressClinic,
            description: data.description
          });
          const { status } = await clinicServices.addDoctorToClinic(newClinic.dataValues.id,idAdminDoctor,"admin");
          if(status){
            resolve({
              status: true,
              message: 'create new clinic successfully',
              data: newClinic
            })
          }
        }
      } catch (error) {
        console.log(error);
        reject({error});
      }
    })
  },
  addDoctorToClinic: (idClinic,idDoctor,roleOfDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkDoctorInClinic = await db.MemberOfClinic.findOne({
          where : {
            idClinic: idClinic,
            idDoctor: idDoctor
          }
        })
        if(checkDoctorInClinic) resolve({status: false, message:'doctor is already in this clinic'});
        const addMemberToClinic = await db.MemberOfClinic.create({
          idClinic: idClinic,
          idDoctor: idDoctor,
          roleOfDoctor: roleOfDoctor
        })
        resolve({
          status: true,
          message: 'Add member to clinic successfully',
          data: addMemberToClinic
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default clinicServices;