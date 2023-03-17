import logger from "../config/winston";

const { default: patientServices } = require("../services/patientServices");
const { default: treatmentHistoryServices } = require("../services/treatmentHistoryServices")

const treatmentHistoryControllers = {
  createTreatmentHistory: async (req,res) => {
    try {
      const { status, message, data } = await treatmentHistoryServices.createTreatmentHistory(req.params.id,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  getTreatmentHistory: async (req,res) => {
    try {
      const { status, message, data } = await treatmentHistoryServices.getTreatmentHistory(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      })
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  updateTreatmentHistory: async (req,res) => {
    try {
      const { status, message, data } = await treatmentHistoryServices.updateTreatmentHistory(req.params.id,req.query.idHistory,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  deleteTreatmentHistory: async (req,res) => {
    try {
      const { status, message } = await treatmentHistoryServices.deleteTreatmentHistory(req.params.id,req.query.idHistory);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message
        })
      })
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error
      })
    }
  }
}

export default treatmentHistoryControllers;