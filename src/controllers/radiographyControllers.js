const { default: radiographyServices } = require("../services/radiographyServices")

const radiographyControllers = {
  getRadiography: async (req,res) => {
    try {
      const { status, message, data } = await radiographyServices.getRadiography(req.params.id);
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
  updateRadiography: async (req,res) => {
    try {
      const { status, message, data } = await radiographyServices.updateRadiography(req.params.id, req.body);
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

export default radiographyControllers;