"use strict";
import logger from "../config/winston";
import patientServices from "../services/patientServices";

const {
  default: radiographyServices,
} = require("../services/radiographyServices");

const radiographyControllers = {
  getRadiography: async (req, res) => {
    try {
      const { status, message, data } =
        await radiographyServices.getRadiography(req.params.id);
      patientServices.getUpdateDoctor(req.params.id).finally((value) => {
        res.status(status).json({
          message: message,
          data: data,
          roleOfDoctor: req.checkRole,
          ...value,
        });
      });
    } catch (error) {
      logger.radiography.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateRadiography: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data } =
        await radiographyServices.updateRadiography(req.params.id, req.body);
      patientServices
        .saveUpdateDoctor(req.params.id, req.body.idDoctor)
        .finally(() => {
          res.status(status).json({
            message: message,
            data: data,
          });
        });
    } catch (error) {
      logger.radiography.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
};

export default radiographyControllers;
