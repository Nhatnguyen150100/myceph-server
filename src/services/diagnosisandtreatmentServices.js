const db = require("../models")

const diagnosisandtreatmentServices = {
  getDiagnosisAndTreatment: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const diagnosis = await db.DiagnosisAndTreatment.findOne({
          where: {
            idDiagnosisAndTreatment: idPatient
          }
        })
        if(diagnosis){
          resolve({
            status: true,
            message: 'get diagnosisAndTreatment successfully',
            data: diagnosis
          })
        }else{
          resolve({
            status: false,
            message: 'get diagnosisAndTreatment failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  updateDiagnosisAndTreatment: (idPatient,data) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const dataUpdate = {
          diagnose: data.diagnose,
          prognosisAndNotes: data.prognosisAndNotes,
        }
        const diagnosisUpdate = await db.DiagnosisAndTreatment.update(dataUpdate,{
          where: {
            idDiagnosisAndTreatment: idPatient
          }
        })
        if(diagnosisUpdate){
          const newDiagnosisUpdate = await db.DiagnosisAndTreatment.findOne({
            where: {
              idDiagnosisAndTreatment: idPatient
            }
          })
          resolve({
            status: true,
            message: 'update diagnosisAndTreatment successfully',
            data: newDiagnosisUpdate
          })
        }else{
          resolve({
            status: false,
            message: 'update diagnosisAndTreatment failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default diagnosisandtreatmentServices;