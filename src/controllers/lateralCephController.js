import logger from "../config/winston";
import lateralCephServices from "../services/lateralCephServices";

const lateralCephController = {
  getListFontSideImages: async (req, res) => {
    try {
      const { status, message, data } =
        await lateralCephServices.getListFontSideImages(req.params.id);
      res.status(status).json({
        message: message,
        data: data,
        roleOfDoctor: req.checkRole,
      });
    } catch (error) {
      logger.lateralCeph.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  getImageAnalysis: async (req, res) => {
    try {
      const { status, message, data } =
        await lateralCephServices.getImageAnalysis(req.params.id);
      res.status(status).json({
        message: message,
        data: data,
      });
    } catch (error) {
      logger.lateralCeph.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  setImageAnalysis: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message } = await lateralCephServices.setImageAnalysis(
        req.body
      );
      res.status(status).json({
        message: message,
      });
    } catch (error) {
      logger.lateralCeph.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  deleteImageAnalysis: async (req, res) => {
    try {
      if (req.checkRole === "view") {
        res.status(401).json({
          message: "You do not have permission to edit this patient",
        });
        return;
      }
      const { status, message } = await lateralCephServices.deleteImageAnalysis(
        req.params.id
      );
      res.status(status).json({
        message: message,
      });
    } catch (error) {
      logger.lateralCeph.error(error);
      res.status(500).json({
        message: "server error",
      });
    }
  },
};

export default lateralCephController;
