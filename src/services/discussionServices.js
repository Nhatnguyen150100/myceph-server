import logger from "../config/winston"

const db = require("../models")

const discussionServices = {
  getMessage: (idRoom,skip) => {
    return new Promise(async (resolve, reject) =>{
      try {
        const listMessage = await db.Discussion.findAll({
          include: [{
            model: db.Doctor,
            attributes: ['email','fullName']
          }],
          offset: skip,
          limit: 10,
          order: [
            ['createdAt', 'ASC']
          ],
          where: {
            idRoomDiscussionOfPatient: idRoom
          },
          raw: true
        })
        return resolve(listMessage);
      } catch (error) {
        logger.discussion.error(error);
        reject(error)
      }
    })
  },
  setMessage: (idRoom, idDoctor,message) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newMessage = await db.Discussion.create({
          idRoomDiscussionOfPatient: idRoom,
          idDoctorSendMessage: idDoctor,
          message: message
        })
        return resolve(newMessage);
      } catch (error) {
        logger.discussion.error(error);
        reject(error)
      }
    })
  }
}

export default discussionServices;