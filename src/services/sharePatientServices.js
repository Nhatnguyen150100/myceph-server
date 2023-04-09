'use strict';
import { sequelize } from "../models";
import QueryTypes, { Op } from "sequelize";
import logger from "../config/winston";
const db = require("../models");

const sharePatientServices = {
  sharePatient: (data,idSharedPatient,idOwnerDoctor) =>{
    return new Promise(async (resolve,reject) =>{
      try {
        if(data.idSharedPatientOfDoctor){
          const checkSharePatient= await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkSharePatient) return resolve({
            status: 202,
            message: 'this patient is shared for doctor'
          })
          const addPatient = await db.SharePatient.create({
            idSharedPatient: idSharedPatient,
            idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
            idOwnerDoctor: idOwnerDoctor,
            roleOfOwnerDoctor: 'view'
          })
          if(addPatient){
            resolve({
              status: 200,
              message: 'patient shared successfully'
            })
          }else{
            resolve({
              status: 202,
              message: 'patient shared failed'
            })
          }
        }else{
          const checkSharePatient= await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfClinic: data.idSharedPatientOfClinic,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkSharePatient) return resolve({
            status: 202,
            message: 'this patient is shared for doctor'
          })
          const addPatient = await db.SharePatient.create({
            idSharedPatient: idSharedPatient,
            idSharedPatientOfClinic: data.idSharedPatientOfClinic,
            idOwnerDoctor: idOwnerDoctor,
            roleOfOwnerDoctor: 'view'
          })
          if(addPatient){
            resolve({
              status: 200,
              message: 'patient shared successfully'
            })
          }else{
            resolve({
              status: 202,
              message: 'patient shared failed'
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  removeSharePatient: (data,idSharedPatient,idOwnerDoctor) =>{
    return new Promise(async (resolve,reject) =>{
      try {
        if(data.idSharedPatientOfDoctor){
          const checkDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkDoctor){
            await db.SharePatient.destroy({
              where: {
                idSharedPatient: idSharedPatient,
                idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: "remove patient shared by doctor successfully"
            })
          }else{
            resolve({
              status: 202,
              message: "can't found patient shared by doctor"
            })
          }
        }else{
          const checkClinic = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfClinic: data.idSharedPatientOfClinic,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkClinic){
            await db.SharePatient.destroy({
              where: {
                idSharedPatient: idSharedPatient,
                idSharedPatientOfClinic: data.idSharedPatientOfClinic,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: "remove patient shared by clinic successfully"
            })
          }else{
            resolve({
              status: 202,
              message: "can't found patient shared by clinic"
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  updateRoleOfOwnerDoctor: (data,idSharedPatient,idOwnerDoctor,roleOfOwnerDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        if(data.idSharedPatientOfDoctor){
          const checkIsPatientOfDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfDoctor: data.idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          if(checkIsPatientOfDoctor){
            await db.SharePatient.update({
              roleOfOwnerDoctor: roleOfOwnerDoctor
            },{
              where: {
                idSharedPatient: idSharedPatient,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: 'update role of owner doctor'
            })
          }else{
            resolve({
              status: 202,
              message: 'doctor is not admin of patient'
            })
          }
        }else{
          const checkIsPatientOfDoctor = await db.SharePatient.findOne({
            where: {
              idSharedPatient: idSharedPatient,
              idSharedPatientOfClinic: data.idSharedPatientOfClinic
            }
          })
          if(checkIsPatientOfDoctor){
            await db.SharePatient.update({
              roleOfOwnerDoctor: roleOfOwnerDoctor
            },{
              where: {
                idSharedPatient: idSharedPatient,
                idOwnerDoctor: idOwnerDoctor
              }
            })
            resolve({
              status: 200,
              message: 'update role of owner doctor'
            })
          }else{
            resolve({
              status: 202,
              message: 'clinic is not admin of patient'
            })
          }
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getDoctorSharedPatient: (idSharedPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        logger.app.info(idSharedPatient)
        const listDoctor = await sequelize.query('select Doctors.id, Doctors.email, Doctors.fullName from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatient = ?',
        {
          replacements: [idSharedPatient],
          type: QueryTypes.SELECT
        }
      );
        logger.sharePatient.info(listDoctor);
        if(listDoctor.length>=0){
          resolve({
            status: 200,
            message: 'get doctor share patient successfully',
            data: listDoctor[0]
          })
        }else{
          resolve({
            status: 202,
            message: 'get doctor share patient failed',
            data: []
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  },
  getAllDoctorSharePatient: (idSharedPatientOfDoctor,page,pageSize) => {
    return new Promise(async (resolve, reject) => {
      try {
        const count = await sequelize.query('select distinct Doctors.id from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatientOfDoctor = ?',
          {
            replacements: [idSharedPatientOfDoctor],
            type: QueryTypes.SELECT
          }
        );
        if(count[0].length>0){
          const start = (page-1)*pageSize;
          const listDoctor = await sequelize.query('select distinct Doctors.id,fullName,email,avatar,gender,birthday from Doctors, Sharepatients where Doctors.id = Sharepatients.idOwnerDoctor and Sharepatients.idSharedPatientOfDoctor = ? limit ?, ?',
            {
              replacements: [idSharedPatientOfDoctor,start,Number(pageSize)],
              type: QueryTypes.SELECT
            }
          );
          if(listDoctor.length>=0){
            resolve({
              status: 200,
              message: 'get doctor share patient successfully',
              data: listDoctor[0],
              count: count[0].length
            })
          }else{
            resolve({
              status: 202,
              message: 'get doctor share patient failed',
              data: [],
              count: 0
            })
          }
        }else{
          resolve({
            status: 200,
            message: 'get doctor share patient successfully',
            data: [],
            count: 0
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getListSharePatientOfDoctorInClinic: (idSharedPatientOfClinic,idOwnerDoctor,page,pageSize) => {
    return new Promise(async (resolve, reject) => {
      try {
        const count = await db.Patient.count(
          {
            include: [{
              model: db.SharePatient,
              where: {
                idSharedPatientOfClinic: idSharedPatientOfClinic,
                idOwnerDoctor: idOwnerDoctor
              }
            }]
          }
        )
        if(count>0){
          const start = (page-1)*pageSize;
          const listPatient = await db.Patient.findAll(
            {
              include: [{
                model: db.SharePatient,
                where: {
                  idSharedPatientOfClinic: idSharedPatientOfClinic,
                  idOwnerDoctor: idOwnerDoctor
                }
              }],
              offset: start,
              limit: Number(pageSize),
              order: [
                ['createdAt', 'DESC']
              ], 
              raw: true
            }
          );
          if(listPatient.length>0){
            resolve({
              status: 200,
              message: 'get patient successfully',
              data: listPatient,
              count: count
            })
          }else{
            resolve({
              status: 202,
              message: 'get patient failed',
              data: [],
              count: 0
            })
          }
        }else{
          resolve({
            status: 200,
            message: 'get patient successfully',
            data: [],
            count: 0
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getListSharePatientOfCurrentDoctor: (idOwnerDoctor,page,pageSize,nameSearch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const count = await db.Patient.count(
          {
            include: [{
              model: db.SharePatient,
              where: {
                idSharedPatientOfClinic: {
                  [Op.is] : null 
                },
                idOwnerDoctor: idOwnerDoctor
              }
            }]
          }
        )
        if(count>0){
          const start = (page-1)*pageSize;
          const listPatient = await db.Patient.findAll(
            {
              include: [{
                model: db.SharePatient,
                where: {
                  idSharedPatientOfClinic: {
                    [Op.is] : null 
                  },
                  idOwnerDoctor: idOwnerDoctor
                }
              },
              {
                model: db.Doctor,
                attributes: ['fullName','email']
              }
            ],
              offset: start,
              limit: Number(pageSize),
              order: [
                ['createdAt', 'DESC']
              ], 
              where: {
                fullName: {[Op.substring]: `${nameSearch}`}
              },  
              raw: true
            }
          );
          if(listPatient.length>0){
            resolve({
              status: 200,
              message: 'get share patient successfully',
              data: listPatient,
              count: count
            })
          }else{
            resolve({
              status: 202,
              message: 'get share patient failed',
              data: [],
              count: 0
            })
          }
        }else{
          resolve({
            status: 200,
            message: 'get share patient successfully',
            data: [],
            count: 0
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  getListSharePatientOfDoctor: (idSharedPatientOfDoctor,idOwnerDoctor,page,pageSize) => {
    return new Promise(async (resolve, reject) => {
      try {
        const count = await db.Patient.count(
          {
            include: [{
              model: db.SharePatient,
              where: {
                idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                idOwnerDoctor: idOwnerDoctor
              }
            }]
          }
        )
        if(count>0){
          const start = (page-1)*pageSize;
          const listPatient = await db.Patient.findAll(
            {
              include: [{
                model: db.SharePatient,
                where: {
                  idSharedPatientOfDoctor: idSharedPatientOfDoctor,
                  idOwnerDoctor: idOwnerDoctor
                }
              }],
              offset: start,
              limit: Number(pageSize),
              order: [
                ['createdAt', 'DESC']
              ], 
              raw: true
            }
          );
          if(listPatient.length>0){
            resolve({
              status: 200,
              message: 'get patient successfully',
              data: listPatient,
              count: count
            })
          }else{
            resolve({
              status: 202,
              message: 'get patient failed',
              data: [],
              count: 0
            })
          }
        }else{
          resolve({
            status: 200,
            message: 'get patient successfully',
            data: [],
            count: 0
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  },
  deleteShareDoctor: (idSharedPatientOfDoctor,idOwnerDoctor) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkDoctorSharePatient = await db.SharePatient.findAll({
          where: {
            idSharedPatientOfDoctor: idSharedPatientOfDoctor,
            idOwnerDoctor: idOwnerDoctor
          }
        })
        if(checkDoctorSharePatient.length > 0){
          await db.SharePatient.destroy({
            where: {
              idSharedPatientOfDoctor: idSharedPatientOfDoctor,
              idOwnerDoctor: idOwnerDoctor
            }
          })
          resolve({
            status: 200,
            message: 'delete share doctor successfully'
          })
        }else{
          resolve({
            status: 202,
            message: 'share doctor is not found'
          })
        }
      } catch (error) {
        reject(error);
      }
    })
  }
}

export default sharePatientServices