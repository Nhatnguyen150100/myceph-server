const db = require("../models")

const intraoralServices = {
  getIntraoral: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(idPatient);
        const intraoral = await db.IntraOral.findOne({
          where: {
            idIntraOral: idPatient
          }
        })
        console.log(intraoral);
        if(intraoral){
          resolve({
            status: true,
            message: 'get intra-oral successfully',
            data: intraoral
          })
        }else{
          resolve({
            status: false,
            message: 'get intra-oral failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  updateIntraoral: (idPatient,data) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const dataUpdate = {
          oralHygiene: data.oralHygiene,
          dentition: data.dentition,
          caries: data.caries,
          missing: data.missing,
          wearingTeeth: data.wearingTeeth,
          detalAldevelopment: data.detalAldevelopment,
          otherProblems: data.otherProblems,
          archForm: data.archForm,
          rightCanine: data.rightCanine,
          rightMolar: data.rightMolar,
          leftCanine: data.leftCanine,
          leftMolar: data.leftMolar,
          overjet: data.overjet,
          overbite: data.overbite,
          curveOfSpee: data.curveOfSpee,
          cant: data.cant,
          posteriorRight: data.posteriorRight,
          posteriorLeft: data.posteriorLeft,
          upperMidline: data.upperMidline,
          lowerMidline: data.lowerMidline,
          crCoDiscrepancy: data.crCoDiscrepancy,
          maximumMouthOpening: data.maximumMouthOpening,
          guidanceOnProtrusion: data.guidanceOnProtrusion,
          guidanceOnRight: data.guidanceOnRight,
          guidanceOnLeft: data.guidanceOnLeft,
          musculature: data.musculature,
          swallowingPattern: data.swallowingPattern,
          historyOfTMD: data.historyOfTMD
        }
        const intraoralUpdate = await db.Intraoral.update(dataUpdate,{
          where: {
            idIntraOral: idPatient
          }
        })
        if(intraoralUpdate){
          const newIntraoralUpdate = await db.Intraoral.findOne({
            where: {
              idIntraOral: idPatient
            }
          })
          resolve({
            status: true,
            message: 'update intra-oral successfully',
            data: newIntraoralUpdate
          })
        }else{
          resolve({
            status: false,
            message: 'update intra-oral failed',
            data: {}
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default intraoralServices;