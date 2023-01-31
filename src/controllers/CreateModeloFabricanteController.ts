import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateModeloFabricanteController {
  async handle(request: Request, response: Response) {
    const { id_modelo, id_fabricante } = request.body;

    const modeloFabricante = await prismaClient.modeloFabricante.create({
      data: {
        id_fabricante,
        id_modelo,
      },
    });

    return response.json(modeloFabricante);
  }
}
