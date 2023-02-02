const { default: authServices } = require("../../services/authServices");
const { default: tokenController } = require("../token/tokenController");

const authLoginController = async (req, res) => {
  const { status, message, data } = await authServices.login(req.body);
  if(!status){
    res.status(400).json(message);
  }else{
    const accessToken = tokenController.generateAccessToken(data);
    res.status(200).json({
      message: message,
      data: {
        ...data,
        accessToken,
      },
    });
  }
}

export default authLoginController;