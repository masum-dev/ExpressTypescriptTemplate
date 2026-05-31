import { type Request, type Response } from "express";

export const pingHandler = (req: Request, res: Response): void => {
    res.send("Pong");
};
