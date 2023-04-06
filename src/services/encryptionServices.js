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
        const listOfIssue = await db.ListOfIssue.findAll({
          where: {
            idListOfIssue: idPatient
          }
        })
        const treatmentPlan = await db.TreatmentPlan.findAll({
          where: {
            idTreatmentPlan: idPatient
          }
        })
        const treatmentHistory = await db.TreatmentHistory.findAll({
          where: {
            idTreatmentHistory: idPatient
          }
        })
        const libraryImagePatient = await db.LibraryImagePatient.findAll({
          where: {
            idPatientImage: idPatient
          }
        })
        if(infoOfPatient){
          return resolve({
            status: 200,
            message: 'get all of information about patient successfully',
            data: {
              infoOfPatient: infoOfPatient,
              otherInformation: {
                listOfIssue: listOfIssue,
                treatmentPlan: treatmentPlan,
                treatmentHistory: treatmentHistory,
                libraryImagePatient: libraryImagePatient
              }
            }
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
  },
  setAllInformationPatient: (idPatient,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.Patient.update(data.informationEncrypted,{
          where: {
            id: idPatient
          }
        })
        await db.History.update(data.historyEncrypted,{
          where: {
            idHistory: idPatient
          }
        })
        await db.ExtraOral.update(data.extraOralEncrypted,{
          where: {
            idExtraoral: idPatient
          }
        })
        await db.IntraOral.update(data.intralOralEncrypted,{
          where: {
            idIntraoral: idPatient
          }
        })
        await db.Radiography.update(data.radiographyEncrypted,{
          where: {
            idRadiography: idPatient
          }
        })
        await db.DiagnosisAndTreatment.update(data.diagnosisAndTreatmentEncrypted,{
          where: {
            idDiagnosisAndTreatment: idPatient
          }
        })
        if(data.listOfIssueEncrypted.length > 0) for (let index = 0; index < data.listOfIssueEncrypted.length; index++) {
          const element = {...data.listOfIssueEncrypted[index]};
          delete element.id;
          console.log("🚀 ~ file: encryptionServices.js:284 ~ returnnewPromise ~ data.listOfIssueEncrypted[index].id:", data.listOfIssueEncrypted[index].id)
          await db.ListOfIssue.update(element,{
            where: {
              id: data.listOfIssueEncrypted[index].id
            }
          })
        }
        if(data.treatmentHistoryEncrypted.length > 0) for (let index = 0; index < data.treatmentHistoryEncrypted.length; index++) {
          const element = {...data.treatmentHistoryEncrypted[index]};
          delete element.id;
          await db.TreatmentHistory.update(element,{
            where: {
              id: data.treatmentHistoryEncrypted[index].id
            }
          })
        }
        if(data.treatmentPlanEncrypted.length > 0) for (let index = 0; index < data.treatmentPlanEncrypted.length; index++) {
          const element = {...data.treatmentPlanEncrypted[index]};
          delete element.id;
          await db.TreatmentPlan.update(element,{
            where: {
              id: data.treatmentPlanEncrypted[index].id
            }
          })
        }
        if(data.libraryImagePatientEncrypted.length > 0) for (let index = 0; index < data.libraryImagePatientEncrypted.length; index++) {
          const element = {...data.libraryImagePatientEncrypted[index]};
          delete element.id;
          await db.LibraryImagePatient.update(element,{
            where: {
              id: data.libraryImagePatientEncrypted[index].id
            }
          })
        }
        const isEncrypted = await db.Patient.findOne({
          attributes: ['isEncrypted'],
          where: {
            id: idPatient
          }
        })
        return resolve({
          status: 200,
          message: `${isEncrypted?'Patient data successfully encrypted':'Patient data successfully decrypted'}`
        })
      } catch (error) {
        logger.encryption.error(error);
        reject(error)  
      }
    })
  }
}

export default encryptionServices;