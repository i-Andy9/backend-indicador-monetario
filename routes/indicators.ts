import express from 'express'
import {
  controllerCurrencyItem,
  controllerCurrencyItemByDate,
  controllerCurrencyList,
} from "../controllers/controllerCurrency"

const indicatorsRoutes = express.Router()

indicatorsRoutes
  .route("/")
  .get(controllerCurrencyList);

indicatorsRoutes
  .route("/:codigo")
  .get(controllerCurrencyItem);

indicatorsRoutes
  .route("/:codigo/:fecha")
  .get(controllerCurrencyItemByDate);

export default indicatorsRoutes;
