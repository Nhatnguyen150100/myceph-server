const db = require("../models");

const radiographyServices = {
  getRadiography: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const radiography = await db.Radiography.findOne({
          where: {
            idRadiography: idPatient
          }
        })
        if(radiography){
          resolve({
            status: true,
            message: 'get radiography successfully',
            data: radiography
          })
        }else{
          resolve({
            status: false,
            message: 'get radiography failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  updateRadiography: (idPatient,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          sinuses: data.sinuses,
          condyles: data.condyles,
          apparentPathology: data.apparentPathology,
          alveolarBoneHeights: data.alveolarBoneHeights,
          crownRootRatio: data.crownRootRatio,
          others: data.others,
          laterakCephalometricRadiography: data.laterakCephalometricRadiography,
          otherRadiography: data.otherRadiography
        }
        const radiographyUpdate = await db.Radiography.update(dataUpdate,{
          where: {
            idRadiography: idPatient
          }
        })
        if(radiographyUpdate){
          const newIntraoralUpdate = await db.Radiography.findOne({
            where: {
              idRadiography: idPatient
            }
          })
          resolve({
            status: true,
            message: 'update radiography successfully',
            data: newIntraoralUpdate
          })
        }else{
          resolve({
            status: false,
            message: 'update radiography failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default radiographyServices;