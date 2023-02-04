import clinicServices from "../services/clinicServices"
import doctorServices from "../services/doctorServices";

const clinicControllers = {
  getAllClinic: async (req,res) => {
    try {
      const { message, data } = await clinicServices.getAllClinic();
      res.status(200).json({
        message: message,
        data: data
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getAllDoctorInClinic: async (req, res) => {
    try {
      const { status, message, data } = await clinicServices.getAllDoctorInClinic(req.params.id);
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
  createNewClinic: async (req,res) => {
    try {
      const { status ,message, data } = await clinicServices.createNewClinic(req.params.id, req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  addDoctorToClinic: async (req,res) => {
    try {
      const { statusDoctor, messageDoctor, doctor} = await doctorServices.getDoctorFromEmail(req.body.email);
      if(statusDoctor){
        const { status, message, data } = await clinicServices.addDoctorToClinic(req.params.id,doctor.id,req.body.roleOfDoctor);
        if(status){
          res.status(200).json({
            message: message,
            data: data
          })
        }else{
          res.status(400).json({
            message: message,
            data: data
          })
        }
      }else{
        res.status(400).json({
          message: messageDoctor,
          data: doctor
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getInformationClinic: async (req,res) => {
    try {
      const { status, message, data } = await clinicServices.updateClinicInformation(req.params.id);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateInformationClinic: async (req, res) => {
    try {
      const { status, message, data } = await clinicServices.updateClinicInformation(req.params.id,req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        })
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}

export default clinicControllers;