"use strict";
import logger from "../config/winston";
import libraryImagePatientServices from "../services/libraryImagePatientServices";
import patientServices from "../services/patientServices";

const libraryImagePatientController = {
  getListImage: async (req, res) => {
    try {
      const role = req.checkRole;
      if (req.query.typeImages === "radiography") {
        const { status, message, data } =
          await libraryImagePatientServices.getListImage(
            req.params.id,
            [1, 2, 3, 4]
          );
        res.status(status).json({
          message: message,
          data: data,
          roleOfDoctor: role,
        });
      } else if (req.query.typeImages === "extraoral") {
        const { status, message, data } =
          await libraryImagePatientServices.getListImage(
            req.params.id,
            [5, 6, 7, 8, 9]
          );
        res.status(status).json({
          message: message,
          data: data,
          roleOfDoctor: role,
        });
      } else {
        const { status, message, data } =
          await libraryImagePatientServices.getListImage(
            req.params.id,
            [10, 11, 12, 13, 14, 15]
          );
        res.status(status).json({
          message: message,
          data: data,
          roleOfDoctor: role,
        });
      }
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  uploadImage: async (req, res) => {
    try {
      const { status, message, data } =
        await libraryImagePatientServices.upLoadImage(
          req.params.id,
          req.body,
          req.body.typeImages
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
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateArrayImagePatient: async (req, res) => {
    try {
      const { status, message, data } =
        await libraryImagePatientServices.updateArrayImage(
          req.params.id,
          req.body.newDate,
          req.body.oldDate,
          req.body.typeImages
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
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  updateImagePatient: async (req, res) => {
    try {
      const { status, message, data } =
        await libraryImagePatientServices.updateImage(
          req.params.id,
          req.body.idImage,
          req.body.consultationDate,
          req.body.typeImage,
          req.body.linkImage,
          req.body.typeImages
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
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
  deleteImagePatient: async (req, res) => {
    try {
      if (req.query.typeImages === "radiography") {
        const { status, message, data } =
          await libraryImagePatientServices.deleteImage(
            req.params.id,
            req.query.idImage,
            [1, 2, 3, 4]
          );
        patientServices
          .saveUpdateDoctor(req.params.id, req.body.idDoctor)
          .finally(() => {
            res.status(status).json({
              message: message,
              data: data,
            });
          });
      } else if (req.query.typeImages === "extraoral") {
        const { status, message, data } =
          await libraryImagePatientServices.deleteImage(
            req.params.id,
            req.query.idImage,
            [5, 6, 7, 8, 9]
          );
        patientServices
          .saveUpdateDoctor(req.params.id, req.body.idDoctor)
          .finally(() => {
            res.status(status).json({
              message: message,
              data: data,
            });
          });
      } else {
        const { status, message, data } =
          await libraryImagePatientServices.deleteImage(
            req.params.id,
            req.query.idImage,
            [10, 11, 12, 13, 14, 15]
          );
        patientServices
          .saveUpdateDoctor(req.params.id, req.body.idDoctor)
          .finally(() => {
            res.status(status).json({
              message: message,
              data: data,
            });
          });
      }
    } catch (error) {
      logger.libraryImagePatient.error(error);
      res.status(500).json({
        message: error,
      });
    }
  },
};

export default libraryImagePatientController;
