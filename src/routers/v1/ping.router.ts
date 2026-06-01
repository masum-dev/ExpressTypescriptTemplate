import { Router } from "express";
import { pingHandler } from "../../controllers/ping.controller.ts";

const pingRouter = Router();

pingRouter.get("/", pingHandler);

export default pingRouter;
