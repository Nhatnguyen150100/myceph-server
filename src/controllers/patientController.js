import patientServices from "../services/patientServices";

const patientController = {
  createPatient: async (req, res) => {
    try {
      const { status, message, data } = await patientServices.createNewPatient(req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getPatient: async (req, res) => {
    try {
      res.status(200).json({
        message: 'get patient information successfully',
        data: req.patient
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  deletePatient: async (req, res) => {
    try {
      const { status, message } = await patientServices.deletePatient(req.params.id);
      if(status){
        res.status(200).json({
          message: message
        })
      }else{
        res.status(400).json({
          message: message
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateInformationPatient: async (req, res) => {
    try {
      const { status, message, data } = await patientServices.updateInformationPatient(req.params.id,req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
}

export default patientController;