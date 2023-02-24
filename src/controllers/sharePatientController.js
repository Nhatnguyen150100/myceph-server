import sharePatientServices from "../services/sharePatientServices";

const sharePatientController = {
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
  updateRoleOfOwnerDoctor: async (req,res) => {
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
  },
  getDoctorSharedPatient: async (req,res) => {
    try {
      const { status, message, data } = await sharePatientServices.getDoctorSharedPatient(req.params.idSharedPatientOfDoctor,req.query.idSharedPatient);
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
  getAllDoctorSharePatient: async (req,res) => {
    try {
      const { status, message, data, count } = await sharePatientServices.getAllDoctorSharePatient(req.params.idSharedPatientOfDoctor,req.query.page,req.query.pageSize);
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
  getListSharePatientOfDoctor: async (req,res) => {
    try {
      const { status, message, data, count } = await sharePatientServices.getListSharePatientOfDoctor(req.params.idSharedPatientOfDoctor,req.query.idOwnerDoctor,req.query.page,req.query.pageSize);
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
  deleteShareDoctor: async (req,res) => {
    try {
      const { status, message } = await sharePatientServices.deleteShareDoctor(req.params.idSharedPatientOfDoctor,req.query.idOwnerDoctor);
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

export default sharePatientController;