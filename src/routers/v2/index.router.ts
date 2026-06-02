import { Router } from 'express';
import pingRouter from './ping.router.ts';

const v2Router = Router();

v2Router.use('/ping', pingRouter);

export default v2Router;
