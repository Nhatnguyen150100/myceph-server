"use strict";
import logger from "../config/winston";
import patientServices from "../services/patientServices";

const { default: intraoralServices } = require("../services/intraoralServices");

const intraoralControllers = {
  getIntraoral: async (req, res) => {
    try {
      const { status, message, data } = await intraoralServices.getIntraoral(
        req.params.id
      );
      res.status(status).json({
        message: message,
        data: data,
        roleOfDoctor: req.checkRole,
      });
    } catch (error) {
      logger.intraoral.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  updateIntraoral: async (req, res) => {
    try {
      const { status, message, data } = await intraoralServices.updateIntraoral(
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
      logger.intraoral.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
};

export default intraoralControllers;
