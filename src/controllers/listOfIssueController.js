import logger from "../config/winston";
import patientServices from "../services/patientServices";

const { default: listOfIssueServices } = require("../services/listOfIssueServices")

const listOfIssueControllers = {
  getListOfIssue: async (req,res) => {
    try {
      const { status, message, data } = await listOfIssueServices.getListOfIssue(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      })
    } catch (error) {
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  createIssue: async (req,res) => {
    try {
      const { status, message, data } = await listOfIssueServices.createIssue(req.params.id,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  updateIssue: async (req,res) => {
    try {
      const { status, message, data } = await listOfIssueServices.updateIssue(req.params.id,req.query.idIssue,req.body);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error
      })
    }
  },
  deleteIssue: async (req, res) => {
    try {
      const { status, message, data } = await listOfIssueServices.deleteIssue(req.params.id,req.query.idIssue);
      patientServices.saveUpdateDoctor(req.params.id,req.body.idDoctor).finally(()=>{
        res.status(status).json({
          message: message,
          data: data
        })
      })
    } catch (error) {
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error
      })
    }
  }
}

export default listOfIssueControllers;