import { Router } from 'express';
import { pingHandler } from '../../controllers/ping.controller.ts';
import { validateRequestBody } from '../../validators/index.ts';
import { pingSchema } from '../../validators/ping.validator.ts';

const pingRouter = Router();

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler);

export default pingRouter;
