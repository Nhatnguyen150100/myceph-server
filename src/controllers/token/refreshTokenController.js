const db = require("../../models");
const { default: tokenController } = require("./tokenController");
import jwt from 'jsonwebtoken';

const refreshToken = async (req,res) => {
  try {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenticated");
    }
    const refreshTokenExist = await db.RefreshToken.findOne({
      where: { token: refreshToken },
      raw: true,
    });
    if (refreshTokenExist == null) {
      return res.status(403).json('Refresh token is not valid');
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, doctor) => {
      try {
        if (err) {
          await db.RefreshToken.destroy({ where: { token: refreshToken } });
          return res.status(403).json('Refresh token is not valid');
        }else{
          // create new access token và refresh token
          const newAccessToken = tokenController.generateAccessToken(doctor);
          const newRefreshToken = tokenController.generateRefreshToken(doctor);
      
          res.status(200).json({
            newAccessToken: newAccessToken,
            newRefreshToken: newRefreshToken,
            message: 'refresh token successfully'
          });
        }
      } catch (error) {
        res.status(400).json({
          message: error
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error
    });
  }
}

export default refreshToken;