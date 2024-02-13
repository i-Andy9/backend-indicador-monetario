import express from "express";
import {
  controllerIndicatorItem,
  controllerIndicatorItemByDate,
  controllerIndicatorList,
} from "../controllers/controllerCurrency";

const indicatorsRoutes = express.Router();

indicatorsRoutes
  .route("/")
  .get(controllerIndicatorList);

indicatorsRoutes
  .route("/:codigo")
  .get(controllerIndicatorItem);

indicatorsRoutes
  .route("/:codigo/:fecha")
  .get(controllerIndicatorItemByDate);

export default indicatorsRoutes;
