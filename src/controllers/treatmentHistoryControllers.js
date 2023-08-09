"use strict";
import logger from "../config/winston";

const { default: patientServices } = require("../services/patientServices");
const {
  default: treatmentHistoryServices,
} = require("../services/treatmentHistoryServices");

const treatmentHistoryControllers = {
  createTreatmentHistory: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await treatmentHistoryServices.createTreatmentHistory(
          req.params.id,
          req.body
        );
      patientServices
        .saveUpdateDoctor(req.params.id, req.body.idDoctor)
        .finally(() => {
          res.status(status).json({
            message: message,
            data: data,
            count: count,
          });
        });
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  getTreatmentHistory: async (req, res) => {
    try {
      const { status, message, data, count } =
        await treatmentHistoryServices.getTreatmentHistory(
          req.params.id,
          req.query.page,
          req.query.pageSize
        );
      res.status(status).json({
        message: message,
        data: data,
        count: count,
      });
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateTreatmentHistory: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await treatmentHistoryServices.updateTreatmentHistory(
          req.params.id,
          req.query.idHistory,
          req.body,
          req.query.page,
          req.query.pageSize
        );
      patientServices
        .saveUpdateDoctor(req.params.id, req.body.idDoctor)
        .finally(() => {
          res.status(status).json({
            message: message,
            data: data,
            count: count,
          });
        });
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  deleteTreatmentHistory: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await treatmentHistoryServices.deleteTreatmentHistory(
          req.params.id,
          req.query.idHistory
        );
      patientServices
        .saveUpdateDoctor(req.params.id, req.query.idDoctor)
        .finally(() => {
          res.status(status).json({
            message: message,
            data: data,
            count: count,
          });
        });
    } catch (error) {
      logger.treatmentHistory.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
};

export default treatmentHistoryControllers;
