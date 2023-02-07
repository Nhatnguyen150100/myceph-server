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
  },
  getInformationDoctor: async (req,res) => {
    try {
      const doctor = req.doctor;
      delete doctor.password;
      res.status(200).json({
        message: 'get information doctor successfully',
        data: doctor
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateInformationDoctor: async (req, res) => {
    try {
      const { status, message, data } = await doctorServices.updateDoctorInformation(req.params.id,req.body);
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
  },
  getAllClinicFromDoctor: async (req,res) => {
    try {
      const { status, message, data } = await doctorServices.getAllClinicFromDoctor(req.params.id);
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