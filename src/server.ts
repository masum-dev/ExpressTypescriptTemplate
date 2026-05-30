import express from "express";
import { serverConfig } from "./config/index.ts";

const app = express();

app.get("/ping", (req, res) => {
    res.send("Pong");
});

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on PORT: ${serverConfig.PORT}`);
});
