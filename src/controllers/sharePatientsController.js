const { default: sharePatientServices } = require("../services/sharePatientServices")

const sharePatientsController = {
  sharePatient: async (req,res) => {
    try {
      const { status, message } = await sharePatientServices.sharePatient(req.body,req.body.idSharedPatient,req.body.idOwnerDoctor);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  removeSharePatient: async (req,res) => {
    try {
      const { status, message } = await sharePatientServices.removeSharePatient(req.body,req.body.idSharedPatient,req.body.idOwnerDoctor);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateRoleOfOwnerDoctor: async (req,res) =>{
    try {
      const { status, message } = await sharePatientServices.updateRoleOfOwnerDoctor(req.body,req.body.idSharedPatient,req.body.idOwnerDoctor,req.body.roleOfOwnerDoctor);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}

export default sharePatientsController;