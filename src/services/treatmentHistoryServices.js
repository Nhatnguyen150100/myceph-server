"use strict";
import logger from "../config/winston";

const db = require("../models");

const treatmentHistoryServices = {
  getTreatmentHistory: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const treatmentHistory = await db.TreatmentHistory.findAll({
          order: [["createdAt", "DESC"]],
          where: {
            idTreatmentHistory: idPatient,
          },
        });
        if (treatmentHistory.length >= 0) {
          resolve({
            status: 200,
            message: "get treatment history successfully",
            data: treatmentHistory,
          });
        } else {
          resolve({
            status: 202,
            message: "get treatment history failed",
            data: [],
          });
        }
      } catch (error) {
        logger.treatmentHistory.error(error);
        reject(error);
      }
    });
  },
  createTreatmentHistory: (idPatient, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const treatmentHistory = await db.TreatmentHistory.create({
          idTreatmentHistory: idPatient,
          currentStatus: data.currentStatus,
          performedProcedures: data.performedProcedures,
          consultationDate: new Date(data.consultationDate),
        });
        if (treatmentHistory) {
          const treatmentHistoryData = await db.TreatmentHistory.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              idTreatmentHistory: idPatient,
            },
          });
          resolve({
            status: 200,
            message: "create treatment history successfully",
            data: treatmentHistoryData,
          });
        } else {
          resolve({
            status: 202,
            message: "create treatment history failed",
            data: null,
          });
        }
      } catch (error) {
        logger.treatmentHistory.error(error);
        reject(error);
      }
    });
  },
  updateTreatmentHistory: (idPatient, idHistory, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          currentStatus: data.currentStatus,
          performedProcedures: data.performedProcedures,
          consultationDate: new Date(data.consultationDate),
        };
        const updateTreatmentHistory = await db.TreatmentHistory.update(
          dataUpdate,
          {
            where: {
              id: idHistory,
            },
          }
        );
        if (updateTreatmentHistory) {
          const treatmentHistoryData = await db.TreatmentHistory.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              idTreatmentHistory: idPatient,
            },
          });
          resolve({
            status: 200,
            message: "update treatment history successfully",
            data: treatmentHistoryData,
          });
        } else {
          resolve({
            status: 202,
            message: "update treatment history failed",
            data: null,
          });
        }
      } catch (error) {
        logger.treatmentHistory.error(error);
        reject(error);
      }
    });
  },
  deleteTreatmentHistory: (idPatient, idHistory) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteTreatmentHistory = await db.TreatmentHistory.destroy({
          where: {
            id: idHistory,
          },
        });
        if (deleteTreatmentHistory) {
          const treatmentHistoryData = await db.TreatmentHistory.findAll({
            order: [["createdAt", "DESC"]],
            where: {
              idTreatmentHistory: idPatient,
            },
          });
          resolve({
            status: 200,
            message: "delete treatment history successfully",
            data: treatmentHistoryData,
          });
        } else {
          resolve({
            status: 202,
            message: "delete treatment history failed",
            data: null,
          });
        }
      } catch (error) {
        logger.treatmentHistory.error(error);
        reject(error);
      }
    });
  },
};

export default treatmentHistoryServices;
