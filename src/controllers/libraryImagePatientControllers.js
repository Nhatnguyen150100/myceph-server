import logger from "../config/winston";
import libraryImagePatientServices from "../services/libraryImagePatientServices"
import patientServices from "../services/patientServices";

const libraryImagePatientController = {
  getListImage: async (req,res) => {
    try {
      const { status, message, data } = await libraryImagePatientServices.getListImage(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      })
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  uploadImage: async (req, res) => {
    try {
      const { status, message, data } = await libraryImagePatientServices.upLoadImage(req.params.id,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  updateArrayImagePatient: async (req, res) => {
    try {
      const { status, message, data } = await libraryImagePatientServices.updateArrayImage(req.params.id,req.body.newDate,req.body.oldDate);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  updateImagePatient: async (req, res) => {
    try {
      const { status, message, data } = await libraryImagePatientServices.updateImage(req.params.id,req.body.idImage,req.body.consultationDate,req.body.typeImage,req.body.linkImage);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  deleteImagePatient: async (req, res) => {
    try {
      const { status, message, data } = await libraryImagePatientServices.deleteImage(req.params.id,req.query.idImage);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error
      })
    }
  }
}

export default libraryImagePatientController;