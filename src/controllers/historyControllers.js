const { default: historyServices } = require("../services/historyServices")

const historyControllers = {
  getHistory: async (req,res) => {
    try {
      const { status, message, data } = await historyServices.getHistory(req.params.id);
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
  updateHistory: async (req,res) => {
    try {
      const { status, message, data } = await historyServices.updateHistory(req.params.id,req.body);
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

export default historyControllers;