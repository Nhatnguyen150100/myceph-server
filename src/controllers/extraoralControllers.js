"use strict";
import logger from "../config/winston";
import patientServices from "../services/patientServices";

const { default: extraoralServices } = require("../services/extraoralServices");

const extraoralControllers = {
  getExtraoral: async (req, res) => {
    try {
      const { status, message, data } = await extraoralServices.getExtraoral(
        req.params.id
      );
      logger.extraoral.info(data);
      res.status(status).json({
        message: message,
        data: data,
        roleOfDoctor: req.checkRole,
      });
    } catch (error) {
      logger.extraoral.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateExtraoral: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data } = await extraoralServices.updateExtraoral(
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
      logger.extraoral.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
};

export default extraoralControllers;
