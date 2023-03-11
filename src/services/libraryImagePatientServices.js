import toISODateString from "../common/utility";
import _ from 'lodash';

const { default: logger } = require("../config/winston");
const db = require("../models");

const libraryImagePatientServices = {
  getListImage: (idPatient) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const listImage = await db.LibraryImagePatient.findAll({
          order: [
            ['consultationDate', 'DESC']
          ],
          where: {
            idPatientImage: idPatient
          }
        })
        if(listImage.length >= 0){
          const listImageGroupByDate = _.groupBy(listImage, ({consultationDate}) => toISODateString(new Date(consultationDate)));
          logger.libraryImagePatient.info(listImageGroupByDate);
          resolve({
            status: 200,
            message: 'get list image successfully',
            data: listImageGroupByDate
          })
        }else{
          resolve({
            status: 202,
            message: 'get list image failed'
          })
        }
      } catch (error) {
        logger.libraryImagePatient.error(error);
        reject(error);
      }
    })
  },
  upLoadImage: (idPatient,data) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const image = await db.LibraryImagePatient.create({
          idPatientImage: idPatient,
          linkImage: data.linkImage,
          typeImage: data.typeImage,
          consultationDate: new Date(data.consultationDate)
        });
        if(image){
          const listImage = await db.LibraryImagePatient.findAll({
            order: [
              ['consultationDate', 'DESC']
            ],
            where: {
              idPatientImage: idPatient
            }
          })
          const listImageGroupByDate = _.groupBy(listImage, ({consultationDate}) => toISODateString(new Date(consultationDate)));
          logger.libraryImagePatient.info(listImageGroupByDate);
          resolve({
            status: 200,
            message:'upload image successfully',
            data: listImageGroupByDate
          })
        }else{
          resolve({
            status: 202,
            message: 'upload image failed'
          })
        }
      } catch (error) {
        logger.libraryImagePatient.error(error);
        reject(error);
      }
    })
  },
  updateImage: (idPatient,idImage,consultationDate) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updateImagePatient = await db.LibraryImagePatient.update({
          consultationDate: consultationDate
        },{
          where: {
            id: idImage
          }
        })
        if(updateImagePatient){
          const listImage = await db.LibraryImagePatient.findAll({
            order: [
              ['consultationDate', 'DESC']
            ],
            where: {
              idPatientImage: idPatient
            }
          })
          const listImageGroupByDate = _.groupBy(listImage, ({consultationDate}) => toISODateString(new Date(consultationDate)));
          logger.libraryImagePatient.info(listImageGroupByDate);
          resolve({
            status: 200,
            message:'upload image successfully',
            data: listImageGroupByDate
          })
        }
      } catch (error) {
        logger.libraryImagePatient.error(error);
        reject(error);
      }
    })
  },     
  updateArrayImage: (idPatient,newDate,oldDate) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updateArrayImage = await db.LibraryImagePatient.update(
          {
            consultationDate: new Date(newDate)
          },{
            where: {
              consultationDate: new Date(oldDate)
            }
          }
        )
        if(updateArrayImage){
          const listImage = await db.LibraryImagePatient.findAll({
            order: [
              ['consultationDate', 'DESC']
            ],
            where: {
              idPatientImage: idPatient
            }
          })
          const listImageGroupByDate = _.groupBy(listImage, ({consultationDate}) => toISODateString(new Date(consultationDate)));
          logger.libraryImagePatient.info(listImageGroupByDate);
          resolve({
            status: 200,
            message:'upload image successfully',
            data: listImageGroupByDate
          })
        }
      } catch (error) {
        logger.libraryImagePatient.error(error);
        reject(error);
      }
    })
  },  
  deleteImage: (idPatient,idImage) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deleteImagePatient = await db.LibraryImagePatient.destroy({
          where: {
            id: idImage
          },
          force: true
        })
        if(deleteImagePatient){
          const listImage = await db.LibraryImagePatient.findAll({
            order: [
              ['consultationDate', 'DESC']
            ],
            where: {
              idPatientImage: idPatient
            }
          })
          const listImageGroupByDate = _.groupBy(listImage, ({consultationDate}) => toISODateString(new Date(consultationDate)));
          logger.libraryImagePatient.info(listImageGroupByDate);
          resolve({
            status: 200,
            message:'delete image successfully',
            data: listImageGroupByDate
          })
        }
      } catch (error) {
        logger.libraryImagePatient.error(error);
        reject(error);
      }
    })
  } 
}

export default libraryImagePatientServices