const db = require("../models")

const patientMiddleware = {
  checkPatientExists: (req,res,next) => {
    try {
      const idPatient = req.params.id;
      db.Patient.findOne({
        where: {
          id: idPatient
        }
      }).then(patient => {
        req.patient = patient;
        next();
      }).catch(err => res.status(404).json({
        status: err,
        message: 'Patient not found'
      }))
      
    } catch (error) {
      res.status(500).json({
        message: 'server error'
      });
    }
  }
}

export default patientMiddleware;