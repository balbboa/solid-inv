import { Router } from "express";
import { CreateFabricanteController } from "./controllers/CreateFabricanteController";
import { CreateModeloFabricanteController } from "./controllers/CreateModeloFabricanteController";
import { CreateModeloController } from "./controllers/CreateModeloController";
import { CreateModeloWithExistFabricante } from "./controllers/CreateModeloWithExistFabricante";
import { FindFabricanteController } from "./controllers/FindFabricanteController";
import { FindModeloController } from "./controllers/FindModeloController";

const router = Router();

const createModelo = new CreateModeloController();
const createFabricante = new CreateFabricanteController();
const createModeloFabricante = new CreateModeloFabricanteController();
const createModeloFabricanteExist = new CreateModeloWithExistFabricante();

const findModelo = new FindModeloController();
const findFabricante = new FindFabricanteController();

router.post("/modelo", createModelo.handle);
router.post("/fabricante", createFabricante.handle);
router.post("/fabricanteModelo", createModeloFabricante.handle);
router.post("/modeloWithFabricante", createModeloFabricanteExist.handle);
router.get("/modelo/:id", findModelo.handle);
router.get("/fabricante/:id", findFabricante.handle);

export { router };
