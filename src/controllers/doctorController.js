const { default: doctorServices } = require("../services/doctorServices")

const doctorController = {
  registerDoctorController: async (req,res) =>{
    try {
      const { status ,message, data } = await doctorServices.createNewDoctor(req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
} 

export default doctorController;