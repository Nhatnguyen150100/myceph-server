import { QueryTypes } from "sequelize";
import logger from "../config/winston";
import db, { sequelize } from "../models";

const scheduleServices = {
  getPropertiesClinic: (idClinic) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allDoctorInClinic = await sequelize.query("select idDoctor,email,fullName from myceph.memberofclinics, myceph.doctors where myceph.memberofclinics.idClinic = ? and myceph.memberofclinics.idDoctor = myceph.doctors.id",
        {
          replacements: [idClinic],
          type: QueryTypes.SELECT
        });
        const statusOfClinic = await db.StatusOfClinic.findAll({
          where: {
            idClinicStatus: idClinic
          }
        });
        const serviceOfClinic = await db.ServicesOfClinic.findAll({
          where: {
            idClinicService: idClinic
          }
        });
        const roomOfClinic = await db.RoomOfClinic.findAll({
          where: {
            idClinicRoom: idClinic
          }
        });
        if(allDoctorInClinic.length >=0 && statusOfClinic.length >=0 && serviceOfClinic.length >=0 && roomOfClinic.length >=0){
          resolve({
            status: 200,
            message: 'get attribute of clinic successfully',
            data: {
              doctor: [...allDoctorInClinic],
              statusOfClinic: [...statusOfClinic],
              serviceOfClinic: [...serviceOfClinic],
              roomOfClinic: [...roomOfClinic]              
            }
          })
        }else{
          resolve({
            status: 200,
            message: 'get attribute of clinic failed',
            data: []
          })
        }
      } catch (error) {
        logger.schedule.error(error);
        reject(error);
      }
    })
  },
  getAllAppointments: (idClinic,messageSuccess,messageFailed) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allAppointments = await db.Schedule.findAll({
          order: [
            ['createdAt', 'DESC']
          ],
          where : {
            idClinicSchedule: idClinic
          },
          include: [{
            model: db.ServicesOfClinic,
            attributes: ['nameService','colorService'],
            where: {
              idClinicService: idClinic
            }
          }],
          include: [{
            model: db.RoomOfClinic,
            attributes: ['nameRoom','colorRoom'],
            where: {
              idClinicRoom: idClinic
            }
          }],
          include: [{
            model: db.StatusOfClinic,
            attributes: ['nameStatus','colorStatus'],
            where: {
              idClinicStatus: idClinic
            }
          }]
        })
        if(allAppointments.length >= 0){
          resolve({
            status: 200,
            message: messageSuccess?messageSuccess:'get all appointments successfully',
            data: allAppointments
          })
        }else{
          resolve({
            status: 202,
            message: messageFailed?messageFailed:'get all appointments failed',
            data: []
          })
        }
      } catch (error) {
        logger.schedule.error(error);
        reject(error);
      }
    })
  },
  createAppointment: (idClinic,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const create = await db.Schedule.create({
          idPatientSchedule: data.idPatientSchedule,
          idDoctorSchedule: data.idDoctorSchedule,
          idClinicSchedule: idClinic,
          idStatus: data.idStatus,
          idService: data.idService,
          idRoom: data.idRoom,
          appointmentDate: new Date(data.appointmentDate),
          startTime: data.startTime,
          endTime: data.endTime,
          note: data.note
        })
        if(create){
          scheduleServices.getAllAppointments(idClinic,'create appointment successfully','create appointment failed'); 
        }else{
          resolve({
            status: 202,
            message: 'create appointments failed',
            data: []
          })
        }
      } catch (error) {
        logger.schedule.error(error);
        reject(error);
      }
    })
  },
  updateAppointment: (idClinic,idAppointment,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updateData = {
          idPatientSchedule: data.idPatientSchedule,
          idDoctorSchedule: data.idDoctorSchedule,
          idStatus: data.idStatus,
          idService: data.idService,
          idRoom: data.idRoom,
          appointmentDate: new Date(data.appointmentDate),
          startTime: data.startTime,
          endTime: data.endTime,
          note: data.note
        }
        const update = await db.Schedule.update(updateData,{
          where: {
            id: idAppointment
          }
        })
        if(update){
          scheduleServices.getAllAppointments(idClinic,'update appointment successfully','update appointment failed'); 
        }else{
          resolve({
            status: 202,
            message: 'update appointments failed',
            data: []
          })
        }
      } catch (error) {
        logger.schedule.error(error);
        reject(error);
      }
    })
  },
  deleteAppointment: (idClinic,idAppointment) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteAppoint = await db.Schedule.destroy({
          where: {
            id: idAppointment
          }
        });
        if(deleteAppoint){
          scheduleServices.getAllAppointments(idClinic,'delete appointment successfully','delete appointment failed'); 
        }else{
          resolve({
            status: 202,
            message: 'delete appointments failed',
            data: []
          })
        }
      } catch (error) {
        logger.schedule.error(error);
        reject(error);
      }
    })
  }
}

export default scheduleServices;