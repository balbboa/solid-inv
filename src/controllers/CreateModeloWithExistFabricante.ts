import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateModeloWithExistFabricante {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, id_fabricante } = request.body;

    const modelo = await prismaClient.modeloFabricante.create({
      data: {
        modelo: {
          create: {
            bar_code,
            name,
            price,
          },
        },
        fabricante: {
          connect: {
            id: id_fabricante,
          },
        },
      },
    });

    return response.json(modelo);
  }
}
