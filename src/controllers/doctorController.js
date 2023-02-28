const { default: doctorServices } = require("../services/doctorServices")
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);

const doctorController = {
  findDoctorEmail: (req,res) => {
    const doctor = req.doctor;
    if(doctor){
      res.status(200).json({
        email: doctor.email
      })
    }else{
      res.status(400).json({
        message: error
      })
    }
  },
  createDoctorDev: async (req,res) => {
    try {
      let hashPassword = await bcrypt.hash(req.body.password, salt);
      const { status, message } = await doctorServices.createNewDoctor(req.body.email, hashPassword);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  sendVerifyEmailDoctor: async (req,res) =>{
    try {
      const { status ,message } = await doctorServices.sendVerifyEmail(req.body);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  sendVerifyEmailResetPasswordDoctor: async (req,res) =>{
    try {
      const { status ,message } = await doctorServices.sendVerifyEmailResetPassword(req.body);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  verifyResetEmailDoctor: async (req,res) => {
    try {
      jwt.verify(req.query.token, process.env.JWT_ACCESS_KEY, async (err, email) => {
				if (err) {
          res.status(500).send("The check email has expired, please go back to the registration page");
				}else{
          const { status, message } = await doctorServices.resetPassword(req.query.email, req.query.password);
          if(status === 200) res.redirect(`${process.env.BASE_URL_CLIENT}/login`);
          else res.status(status).send(message);
        }
			});
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getAllDoctorByEmailSearch: async (req,res) => {
    try {
      const { status, message, data } = await doctorServices.getAllDoctorByEmailSearch(req.params.email,req.query.currentEmailDoctor);
      res.status(status).json({
        message: message,
        data: data
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  verifyEmailDoctor: async (req,res) => {
    try {
      const doctor = jwt.verify(req.query.token, process.env.JWT_ACCESS_KEY);
      if(doctor){
          const { status, message } = await doctorServices.createNewDoctor(req.query.email, req.query.password);
          if(status === 200) res.status(status).redirect(`${process.env.BASE_URL_CLIENT}/login`);
          else res.status(status).send(message);
      }else{
        res.status(400).send('failed to verify token');
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getInformationDoctorById: async (req,res) => {
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
      const { status, message } = await doctorServices.updateDoctorInformation(req.params.id,req.body);
      res.status(status).json({
        message: message
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  getAllClinicFromDoctor: async (req,res) => {
    try {
      const { status, message, data } = await doctorServices.getAllClinicFromDoctor(req.params.id);
      res.status(status).json({
        message: message,
        data: data
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
} 

export default doctorController;