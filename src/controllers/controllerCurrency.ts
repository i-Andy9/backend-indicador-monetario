import { Request, Response } from "express";
import {
  getListIndicators,
  getIndicatorsItemByDate,
  getIndicatorItem,
} from "../services/externalApis";

const controllerIndicatorList = async (req:Request,res: Response) => {
  try {
    const response = await getListIndicators();

    return res.status(200).json(response);
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

const controllerIndicatorItem = async (req: Request, resp: Response) => {
  try {
    const id = req.params.codigo;
    const response = await getIndicatorItem(id);

    return resp.status(200).json({ Indicador: response });
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

const controllerIndicatorItemByDate = async (req: Request, resp: Response) => {
  try {
    const id = req.params.codigo;
    const date = req.params.fecha;
    const response = await getIndicatorsItemByDate(id, date);

    return resp.status(200).json({ Indicador: response });
  } catch (error) {
    return console.error("Error al realizar la solicitud HTTP:", error);
  }
};

export {
  controllerIndicatorList,
  controllerIndicatorItem,
  controllerIndicatorItemByDate,
};
