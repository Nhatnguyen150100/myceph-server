const { default: extraoralServices } = require("../services/extraoralServices")

const extraoralControllers = {
  getExtraoral: async (req,res) => {
    try {
      const { status, message, data } = await extraoralServices.getExtraoral(req.params.id);
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
  updateExtraoral: async (req,res) => {
    try {
      const { status, message, data } = await extraoralServices.updateExtraoral(req.params.id,req.body);
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

export default extraoralControllers;