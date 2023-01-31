import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateModeloController {
  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;

    const modelo = await prismaClient.modelo.create({
      data: {
        bar_code,
        name,
        price,
      },
    });

    return response.json(modelo);
  }
}
