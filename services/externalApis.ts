import { config } from "../config/config";

export const getListIndicators = async () => {
  try {
    const response = await fetch(`${config.HTTPS.URL_BASE}/indicadores`, {
      headers: { Authorization: `${config.HTTPS.AUTHORIZATION}` },
    });
    const indicadores = await response.json();
    return indicadores;
  } catch (error) {
    console.error("Error al realizar la solicitud HTTP:", error);
    return ({ error: "Error interno del servidor" });
  }
};
export const getIndicatorItem = async (codigo:string) => {
  try {
    const response = await fetch(`${config.HTTPS.URL_BASE}/indicadores/${codigo}`, {
      headers: { Authorization: `${config.HTTPS.AUTHORIZATION}` },
    });
    const IndicadorItem = await response.json();
    return IndicadorItem;
  } catch (error) {
    console.error("Error al realizar la solicitud HTTP:", error);
    return ({ error: "Error interno del servidor" });
  }
};
export const getIndicatorsItemByDate = async (codigo:string,date:string) => {
  try {
    const response = await fetch(`${config.HTTPS.URL_BASE}/indicadores/${codigo}/${date}`, {
      headers: { Authorization: `${config.HTTPS.AUTHORIZATION}` },
    });
    const indicadorItemByFecha = await response.json();
    return indicadorItemByFecha;
  } catch (error) {
    console.error("Error al realizar la solicitud HTTP:", error);
    return ({ error: "Error interno del servidor" });
  }
};
