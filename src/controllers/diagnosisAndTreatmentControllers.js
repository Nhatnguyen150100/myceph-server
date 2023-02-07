const { default: diagnosisandtreatmentServices } = require("../services/diagnosisandtreatmentServices")

const diagnosisAndTreatmentControllers = {
  getDiagnosisAndTreatment: async (req,res) => {
    try {
      const { status, message, data } = await diagnosisandtreatmentServices.getDiagnosisAndTreatment(req.params.id);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateDiagnosisAndTreatment: async (req,res) => {
    try {
      const { status, message, data } = await diagnosisandtreatmentServices.updateDiagnosisAndTreatment(req.params.id,req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        });
      }
    } catch (error) {
      res.status(400).json({
        message: message,
        data: data
      });
    }
  } 
}

export default diagnosisAndTreatmentControllers;