const db = require("../models")

const treatmentPlanServices = {
  getSelectedTreatmentPlan: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const selectedTreatmentPlan = await db.TreatmentPlan.findOne({
          where: {
            idTreatmentPlan: idPatient,
            selected: true,
          }
        })
        if(selectedTreatmentPlan){
          resolve({
            status: 200,
            message: 'get selected treatment plan successfully',
            data: selectedTreatmentPlan
          })
        }else{
          resolve({
            status: 200,
            message: 'get selected treatment plan failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  getAllTreatmentPlan: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allTreatmentPlan = await db.TreatmentPlan.findAll({
          where: {
            idTreatmentPlan: idPatient
          }
        })
        if(allTreatmentPlan.length>=0){
          resolve({
            status: 200,
            message: 'get all treatment plan successfully',
            data: allTreatmentPlan
          })
        }else{
          resolve({
            status: 202,
            message: 'get all treatment plan failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  createTreatmentPlan: (idPatient,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const treatmentPlan = await db.TreatmentPlan.create({
          idTreatmentPlan: idPatient,
          plan: data.plan
        })
        if(treatmentPlan){
          resolve({
            status: 200,
            message: 'create treatment plan successfully',
            data: treatmentPlan.dataValues
          })
        }else{
          resolve({
            status: 202,
            message: 'create treatment plan failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  updateTreatmentPlan: (idPatient,idPlan,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          plan: data.plan,
          selected: data.selected
        }
        const newPlan = await db.TreatmentPlan.update(dataUpdate,{
          where: {
            id: idPlan
          }
        })
        if(data.selected){
          await db.TreatmentPlan.update({
            selected: false
          },{
            where: {
              idTreatmentPlan: data.idPatient
            }
          })
        }
        if(newPlan){
          resolve({
            status: 200,
            message: 'update plan successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'update plan failed'
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  deletePlane: (idPatient,idPlan) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deletePlan = await db.TreatmentPlan.destroy({
          where: {
            id: idPlan
          },
          force: true
        })
        if(deletePlan){
          resolve({
            status: 200,
            message: 'Delete plan successfully'
          })
        }else{
          resolve({
            status: 200,
            message: 'Delete plan failed'
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default treatmentPlanServices;