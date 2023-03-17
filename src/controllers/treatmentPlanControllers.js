import logger from "../config/winston";

const { default: patientServices } = require("../services/patientServices");
const { default: treatmentPlanServices } = require("../services/treatmentPlanServices")

const treatmentPlanControllers = {
  createTreatmentPlan: async (req,res) => {
    try {
      const { status, message, data } = await treatmentPlanServices.createTreatmentPlan(req.params.id,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.treatmentPlan.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  getSelectedTreatmentPlan: async (req,res) => {
    try {      
      const { status, message, data } = await treatmentPlanServices.getSelectedTreatmentPlan(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      });
    } catch (error) {
      logger.treatmentPlan.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  getAllTreatmentPlan: async (req,res) => {
    try {      
      const { status, message, data } = await treatmentPlanServices.getAllTreatmentPlan(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      });
    } catch (error) {
      logger.treatmentPlan.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  updateTreatmentPlan: async (req,res) => {
    try {
      const { status, message, data } = await treatmentPlanServices.updateTreatmentPlan(req.params.id,req.query.idPlan,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.treatmentPlan.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  deleteTreatmentPlan: async (req,res) => {
    try {
      const { status, message, data } = await treatmentPlanServices.deletePlane(req.params.id,req.query.idPlan);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.treatmentPlan.error(error);
      res.status(500).json({
        message: error
      })
    }
  }
}

export default treatmentPlanControllers;