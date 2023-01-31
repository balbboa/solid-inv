import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindModeloController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const modelo = await prismaClient.modelo.findFirst({
      where: {
        id,
      },
      include: {
        ModeloFabricante: {
          include: {
            fabricante: true,
          },
        },
      },
    });

    return response.json(modelo);
  }
}
