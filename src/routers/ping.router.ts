import Express from "express";
import { pingHandler } from "../controllers/ping.controller.ts";

const pingRouter = Express.Router();

pingRouter.get("/ping", pingHandler);

export default pingRouter;
