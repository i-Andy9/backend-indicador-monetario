import { Request, Response } from 'express';
import { config } from '../src/config/config';
import { getListIndicators, getIndicatorItem, getIndicatorsItemByDate } from '../src/services/externalApis';
import { responseGetIndicatorItem, responselistIndicators } from './mocks/controller-mocks';
import { controllerIndicatorItem, controllerIndicatorItemByDate } from '../src/controllers/controllerCurrency';

jest.mock('../src/services/externalApis');

describe('Funciones de Consumo de API Externa', () => {
  test('getListIndicators debería llamar a la API con la URL correcta y el encabezado de autorización', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => responselistIndicators,
    });

    const result = await getListIndicators();

    expect(result).toBe(responselistIndicators);
    expect(global.fetch).toHaveBeenCalledWith(`${config.HTTPS.URL_BASE}/indicadores`, {
      headers: { Authorization: `${config.HTTPS.AUTHORIZATION}` },
    });
  });
});

describe('controllerIndicatorItem', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { params: { codigo: 'utm' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it('should return the indicator item', async () => {
    (getIndicatorItem as jest.Mock).mockResolvedValue(responseGetIndicatorItem);

    await controllerIndicatorItem(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ Indicador: responseGetIndicatorItem });
  });

  it('should handle errors', async () => {
    const errorMessage = 'Error al realizar la solicitud HTTP';
    (getIndicatorItem as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await controllerIndicatorItem(req as Request, res as Response);

    expect(console.error).toHaveBeenCalledWith(errorMessage);
  });
});

describe('controllerIndicatorItemByDate', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { params: { codigo: 'utm', fecha: '2023-10-26' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  });

  it('should return the indicator item by date', async () => {
    const mockResponse = { unidad: 'Pesos', valor: 64343 };
    (getIndicatorsItemByDate as jest.Mock).mockResolvedValue(mockResponse);

    await controllerIndicatorItemByDate(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ Indicador: mockResponse });
  });

  it('should handle errors', async () => {
    const errorMessage = 'Error al realizar la solicitud HTTP';
    (getIndicatorsItemByDate as jest.Mock).mockRejectedValue(new Error(errorMessage));
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await controllerIndicatorItemByDate(req as Request, res as Response);

    expect(console.error).toHaveBeenCalledWith(errorMessage);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});