import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindFabricanteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const fabricante = await prismaClient.fabricante.findFirst({
      where: {
        id,
      },
      include: {
        ModeloFabricante: true,
      },
    });

    return response.json(fabricante);
  }
}
