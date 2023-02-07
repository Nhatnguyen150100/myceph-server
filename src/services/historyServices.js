const db = require("../models")

const historyServices = {
  getHistory: (idPatient) => {
    return new Promise(async (resolve,reject) => {
      try {
        const history = await db.getHistory.findOne({
          where: {
            idHistory: idPatient
          }
        })
        if(history){
          resolve({
            status: true,
            message: 'get history of patient successfully',
            data: history
          })
        }else{
          resolve({
            status: false,
            message: 'get history of patient failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  updateHistory: (idPatient,data) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const dataUpdate = {
          dentalHistory: data.dentalHistory,
          medicalHistory: data.medicalHistory,
          cvmi: data.cvmi,
          otherMethodToEvaluate: data.otherMethodToEvaluate,
          respiration: data.respiration,
          habits: data.habits,
          compliance: data.compliance
        }
        const updateNewHistory = await db.History.update(dataUpdate, {
          where: {
            idHistory: idPatient
          }
        })
        if(updateNewHistory){
          const newHistory = await db.History.findOne({
            where: {
              idHistory: idPatient
            }
          })
          resolve({
            status: true,
            message: 'updated history successfully',
            data: newHistory
          })
        }else{
          resolve({
            status: false,
            message: 'update history failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default historyServices;