import express from "express";
import { serverConfig } from "./config/index.ts";
import pingRouter from "./routers/ping.router.ts";

const app = express();

/** Registering all the routers and their corresponding
 *  routes with the app object.
 */
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on PORT: ${serverConfig.PORT}`);
});
