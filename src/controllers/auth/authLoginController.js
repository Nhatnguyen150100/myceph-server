const { default: authServices } = require("../../services/authServices");
const { default: tokenController } = require("../token/tokenController");

const authLoginController = async (req, res) => {
  try {
    const { status, message, data } = await authServices.login(req.body);
    if(status === 200){
      const accessToken = tokenController.generateAccessToken(data);
      res.status(status).json({
        message: message,
        data: {
          ...data,
          accessToken,
        },
      });
    }else{
      res.status(status).json({message:message});
    }
  } catch (error) {
    res.status(400).json({message:error});
  }
}

export default authLoginController;