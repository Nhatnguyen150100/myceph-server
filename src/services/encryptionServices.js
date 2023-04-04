'use strict';

import logger from "../config/winston";

const db = require("../models")

const encryptionServices = {
  setEncryptionForClinic: (idClinic,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataEncrypt = {
          idDoctor: data.idDoctor,
          nameDoctor: data.nameDoctor,
          emailDoctor: data.emailDoctor
        }
        const encrypted = await db.Clinic.update({
          encryptedBy: JSON.stringify(dataEncrypt)
        },{
          where: {
            id: idClinic
          }
        })
        if(encrypted){
          let newClinicWithEncrypted = await db.Clinic.findOne({
            where: {
              id: idClinic
            }
          })
          newClinicWithEncrypted.encryptedBy = JSON.parse(newClinicWithEncrypted.encryptedBy);
          return resolve({
            status: 200,
            message: 'set encryption key for clinic successfully',
            data: newClinicWithEncrypted
          })
        }
        reject({
          status: 202,
          message: 'set encryption key for clinic failed',
          data: null
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)
      }
    })
  },
  deleteEncryptionForClinic: (idClinic) => {
    return new Promise(async (resolve, reject) => {
      try {
        const encrypted = await db.Clinic.update({
          encryptedBy: null 
        },{
          where: {
            id: idClinic
          }
        })
        if(encrypted){
          let newClinicWithEncrypted = await db.Clinic.findOne({
            where: {
              id: idClinic
            }
          })
          return resolve({
            status: 200,
            message: 'delete encryption key for clinic successfully',
            data: newClinicWithEncrypted
          })
        }
        reject({
          status: 202,
          message: 'delete encryption key for clinic failed',
          data: null
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)
      }
    })
  },
  setEncryptionForDoctor: (idDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const encrypted = await db.Doctor.update({
          encryptionKey: true
        },{
          where: {
            id: idDoctor
          }
        })
        if(encrypted){
          let newDoctorWithEncrypted = await db.Doctor.findOne({
            where: {
              id: idDoctor
            }
          })
          return resolve({
            status: 200,
            message: 'set encryption key for doctor successfully',
            data: newDoctorWithEncrypted
          })
        }
        reject({
          status: 202,
          message: 'set encryption key for clinic failed',
          data: null
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)
      }
    })
  },
  deleteEncryptionForDoctor: (idDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const encrypted = await db.Doctor.update({
          encryptionKey: false
        },{
          where: {
            id: idDoctor
          }
        })
        if(encrypted){
          let newDoctorWithEncrypted = await db.Doctor.findOne({
            where: {
              id: idDoctor
            }
          })
          return resolve({
            status: 200,
            message: 'set encryption key for doctor successfully',
            data: newDoctorWithEncrypted
          })
        }
        reject({
          status: 202,
          message: 'set encryption key for clinic failed',
          data: null
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)
      }
    })
  },
  getAllInformationPatient: (idPatient) =>{
    return new Promise(async (resolve, reject) =>{
      try {
        const infoOfPatient = await db.Patient.findOne(
          {
            include: [
              {
                model: db.History,
                as: 'histories',
                timestamps: false,
                where: {
                  idHistory: idPatient
                }
              },
              {
                model: db.ExtraOral,
                as: 'extraOrals',
                timestamps: false,
                where: {
                  idExtraoral: idPatient
                }
              },
              {
                model: db.IntraOral,
                as: 'intraOrals',
                timestamps: false,
                where: {
                  idIntraoral: idPatient
                }
              },
              {
                model: db.Radiography,
                as: 'radiographies',
                timestamps: false,
                where: {
                  idRadiography: idPatient
                }
              },
              {
                model: db.DiagnosisAndTreatment,
                as: 'diagnosisAndTreatments',
                timestamps: false,
                where: {
                  idDiagnosisAndTreatment: idPatient
                }
              }
            ],
            where: {
              id: idPatient
            },   
            raw: true,
            nest: true // phân loại kết quả theo bảng
          }
        )
        const otherInfor = await db.Patient.findAll({
          attributes: [],
          include: [
            {
              model: db.ListOfIssue,
              timestamps: false,
              where: {
                idListOfIssue: idPatient
              }
            },
            {
              model: db.TreatmentPlan,
              timestamps: false,
              where: {
                idTreatmentPlan: idPatient
              }
            },
            {
              model: db.TreatmentHistory,
              timestamps: false,
              where: {
                idTreatmentHistory: idPatient
              }
            },
            {
              model: db.SharePatient,
              timestamps: false,
              where: {
                idSharedPatient: idPatient
              }
            },
            // {
            //   model: db.Schedule,
            //   timestamps: false,
            //   where: {
            //     idPatientSchedule: idPatient
            //   }
            // },
          ],
          where: {
            id: idPatient
          },   
          raw: true,
          nest: true // phân loại kết quả theo bảng
        })
        console.log("🚀 ~ file: encryptionServices.js:219 ~ returnnewPromise ~ otherInfor:", otherInfor)
        if(otherInfor){
          return resolve({
            status: 200,
            message: 'get all of information about patient successfully',
            data: otherInfor
          })
        }
        reject({
          status: 202,
          message: 'get all of information about patient failed',
          data: null
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)  
      }
    })
  }
}

export default encryptionServices;