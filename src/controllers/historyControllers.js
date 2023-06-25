"use strict";
import logger from "../config/winston";
import patientServices from "../services/patientServices";

const { default: historyServices } = require("../services/historyServices");

const historyControllers = {
  getHistory: async (req, res) => {
    try {
      const { status, message, data } = await historyServices.getHistory(
        req.params.id
      );
      patientServices.getUpdateDoctor(req.params.id).finally((value) => {
        res.status(status).json({
          message: message,
          data: data,
          roleOfDoctor: req.checkRole,
          ...value,
        });
      });
    } catch (error) {
      logger.history.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateHistory: async (req, res) => {
    try {
      const { status, message, data } = await historyServices.updateHistory(
        req.params.id,
        req.body
      );
      patientServices
        .saveUpdateDoctor(req.params.id, req.body.idDoctor)
        .finally(() => {
          res.status(status).json({
            message: message,
            data: data,
          });
        });
    } catch (error) {
      logger.history.error(error);
      res.status(500).json({
        message: error,
        data: null,
      });
    }
  },
};

export default historyControllers;
