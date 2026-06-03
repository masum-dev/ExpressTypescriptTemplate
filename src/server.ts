import express from 'express';
import { serverConfig } from './config/index.ts';
import v1Router from './routers/v1/index.router.ts';
import v2Router from './routers/v2/index.router.ts';

const app = express();

app.use(express.json());

/** Registering all the routers and their corresponding
 *  routes with the app object.
 */
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on PORT: ${serverConfig.PORT}`);
});
