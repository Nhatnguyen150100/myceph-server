const { default: intraoralServices } = require("../services/intraoralServices")

const intraoralControllers = {
  getIntraoral: async (req,res) => {
    try {
      const { status, message, data } = await intraoralServices.getIntraoral(req.params.id);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  },
  updateIntraoral: async (req,res) => {
    try {
      const { status, message, data } = await intraoralServices.updateIntraoral(req.params.id,req.body);
      if(status){
        res.status(200).json({
          message: message,
          data: data
        })
      }else{
        res.status(400).json({
          message: message,
          data: data
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}

export default intraoralControllers;