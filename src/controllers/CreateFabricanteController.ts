import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateFabricanteController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const fabricante = await prismaClient.fabricante.create({
      data: {
        name,
      },
    });

    return response.json(fabricante);
  }
}
