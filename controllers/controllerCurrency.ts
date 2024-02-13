import { Request, Response } from "express";
import {
  getListIndicators,
  getIndicatorsItemByDate,
  getIndicatorItem,
} from "../services/externalApis";

const controllerCurrencyList = async (res: Response) => {
  try {
    const response = await getListIndicators();

    return res.status(200).json({ Indicadores: response });
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

const controllerCurrencyItem = async (req: Request, resp: Response) => {
  try {
    const id = req.params.codigo;
    const response = await getIndicatorItem(id);

    return resp.status(200).json({ Indicadores: response });
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

const controllerCurrencyItemByDate = async (req: Request, resp: Response) => {
  try {
    const id = req.params.codigo;
    const date = req.params.fecha;
    const response = await getIndicatorsItemByDate(id,date);

    return resp.status(200).json({ Indicadores: response });
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

export {
  controllerCurrencyList,
  controllerCurrencyItem,
  controllerCurrencyItemByDate,
};
