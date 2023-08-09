"use strict";
import logger from "../config/winston";
import patientServices from "../services/patientServices";

const {
  default: listOfIssueServices,
} = require("../services/listOfIssueServices");

const listOfIssueControllers = {
  getListOfIssue: async (req, res) => {
    try {
      const { status, message, data, count } =
        await listOfIssueServices.getListOfIssue(
          req.params.id,
          req.query.page,
          req.query.pageSize
        );
      res.status(status).json({
        message: message,
        data: data,
        count: count,
        roleOfDoctor: req.checkRole,
      });
    } catch (error) {
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  createIssue: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await listOfIssueServices.createIssue(req.params.id, req.body);
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
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateIssue: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await listOfIssueServices.updateIssue(
          req.params.id,
          req.query.idIssue,
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
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  deleteIssue: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message, data, count } =
        await listOfIssueServices.deleteIssue(req.params.id, req.query.idIssue);
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
      logger.listOfIssue.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
};

export default listOfIssueControllers;
