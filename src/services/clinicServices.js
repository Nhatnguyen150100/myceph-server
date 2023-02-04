import db, { sequelize } from "../models";
import QueryTypes from "sequelize";

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
        const listIdDoctor = await db.MemberOfClinic.findAll({
          attributes: ['idDoctor'],
          where: {
            idClinic: idClinic
          }
        })
        let listDoctor = [];
        for (let i = 0; i < listIdDoctor.length; i++) {
          listDoctor.push(await db.Doctor.findOne({
            where: {
              id: listIdDoctor[i].idDoctor
            }
          }))
        }
        if(listDoctor.length > 0) {
          resolve({
            status: true,
            message: "Get all doctor successfully",
            data: listDoctor
          })
        }else{
          resolve({
            status: false,
            message: "Get all doctor failed",
            data: listDoctor
          })
        }
      } catch (error) {
        reject(error);        
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
        const checkDoctorExists = await db.Doctor.findOne({
          where:{
            id: idDoctor
          }
        })
        if(!checkDoctorExists) {
          resolve({status: false, message:'doctor not found'});
        }
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
  },
  getInformationClinic: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const clinic = await db.Clinic.findOne({
          where: {
            id: id
          }
        })        
        if(clinic){
          resolve({
            status: true,
            message: 'get information of clinic successfully',
            data: clinic
          })
        }else{
          console.log("failed to get information");
          resolve({
            status: false,
            message: 'get information of clinic failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  updateClinicInformation: (id,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          nameClinic: data.nameClinic,
          emailClinic: data.emailClinic,
          phoneNumberClinic: data.phoneNumberClinic,
          avatarClinic: data.avatarClinic,
          addressClinic: data.addressClinic,
          description: data.description,
        }
        const clinicUpdate = await db.Clinic.update(dataUpdate, {where: {id : id}});
        if(clinicUpdate){
          const newInformation = await db.Clinic.findOne({where: { id: id }});
          delete newInformation.password;
          resolve({
            status: true,
            message: 'Update information of clinic successfully',
            data: newInformation
          })
        }else{
          resolve({
            status: false,
            message: 'Update information of clinic failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default clinicServices;