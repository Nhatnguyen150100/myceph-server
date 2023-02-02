import clinicServices from "../services/clinicServices"

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
  }
}

export default clinicControllers;