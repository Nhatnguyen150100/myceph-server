import logger from "../config/winston";

const db = require("../models");

const listOfIssueServices = {
  getListOfIssue: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const listOfIssue = await db.ListOfIssue.findAll({
          order: [
            ['createdAt', 'DESC']
          ],
          where: {
            idListOfIssue: idPatient
          }
        })
        if(listOfIssue.length>=0) {
          resolve({
            status: 200,
            message: 'get list of issues successfully',
            data: listOfIssue
          })
        }else{
          resolve({
            staus: 202,
            message: 'get list of issues failed',
            data: {}
          })
        }
      } catch (error) {
        logger.listOfIssue.error(error);
        reject(error);
      }
    })
  },
  createIssue: (idPatient,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newIssue = await db.ListOfIssue.create({
          idListOfIssue: idPatient,
          issue: data.issue,
          treatmentObject: data.treatmentObject,
          treatmentMethod: data.treatmentMethod,
          priotized: data.priotized
        })
        if(newIssue){
          const listOfIssue = await db.ListOfIssue.findAll({
            order: [
              ['createdAt', 'DESC']
            ],
            where: {
              idListOfIssue: idPatient
            }
          })
          resolve({
            status: 200,
            message: 'create issue successfully',
            data: listOfIssue
          })
        }else{
          resolve({
            status: 202,
            message: 'create issue failed',
            data: null
          })
        }
      } catch (error) {
        logger.listOfIssue.error(error);
        reject(error);
      }
    });
  },
  updateIssue: (idPatient,idIssue,data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dataUpdate = {
          issue: data.issue,
          treatmentObject: data.treatmentObject,
          treatmentMethod: data.treatmentMethod,
          priotized: data.priotized,
        }
        const newIssue = await db.ListOfIssue.update(dataUpdate,{
          where: {
            id: idIssue
          }
        })
        if(newIssue){
          const listOfIssue = await db.ListOfIssue.findAll({
            order: [
              ['createdAt', 'DESC']
            ],
            where: {
              idListOfIssue: idPatient
            }
          })
          resolve({
            status: 200,
            message: 'update issue successfully',
            data: listOfIssue
          })
        }else{
          resolve({
            status: 202,
            message: 'update issue failed',
            data: null
          })
        }
      } catch (error) {
        logger.listOfIssue.error(error);
        reject(error);
      }
    })
  },
  deleteIssue: (idPatient,idIssue) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteIssue = await db.ListOfIssue.destroy({
          where: {
            id: idIssue,
          },
          force: true
        });
        if(deleteIssue){
          const listOfIssue = await db.ListOfIssue.findAll({
            order: [
              ['createdAt', 'DESC']
            ],
            where: {
              idListOfIssue: idPatient
            }
          })
          resolve({
            status: 200,
            message: 'Delete issue successfully',
            data: listOfIssue
          })
        }else{
          resolve({
            status: 200,
            message: 'Delete issue failed',
            data: null
          })
        }
      } catch (error) {
        logger.listOfIssue.error(error);
        reject(error);
      }
    })
  }
}

export default listOfIssueServices;