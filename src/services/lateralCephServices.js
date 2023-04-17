const { default: logger } = require("../config/winston")
const db = require("../models")

const lateralCephServices = {
  getListFontSideImages: (idPatient) => {
    return new Promise(async (resolve, reject) => {
      try {
        const sideFaceImage = await db.LibraryImagePatient.findAll({
          order: [
            ['createdAt', 'DESC']
          ],
          where: {
            typeImage: 1,
            idPatientImage: idPatient
          }
        })
        resolve({
          status: 200,
          message: 'get list font side images successfully',
          data: sideFaceImage
        })
      } catch (error) {
        logger.lateralCeph.error(error);
        reject(error)
      }
    })
  }
}

export default lateralCephServices;