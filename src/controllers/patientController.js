import patientServices from "../services/patientServices";

const patientController = {
  createPatient: async (req, res) => {
    try {
      const { status, message } = await patientServices.createNewPatient(req.body);
      res.status(status).json({
        message: message
      })
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
  getPatientListForDoctor: async (req, res) => {
    try {
      const { status, message, data, count } = await patientServices.getPatientListForDoctor(req.params.id,req.query.page,req.query.pageSize,req.query.nameSearch);
      res.status(status).json({
        message: message,
        data: data,
        count: count
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getPatientListForClinic: async (req, res) => {
    try {
      const { status, message, data } = await patientServices.getPatientListForClinic(req.params.id,req.query.page,req.query.pageSize,req.query.nameSearch);
      res.status(status).json({
        message: message,
        data: data
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
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateInformationPatient: async (req, res) => {
    try {
      const { status, message, data } = await patientServices.updateInformationPatient(req.params.id,req.body);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
}

export default patientController;