import { type Request, type Response, type NextFunction } from 'express';
import type { ZodObject } from 'zod/v4';

/**
 *
 * @param schema - Zod schema to validate the request body
 * @returns Middleware function to validate the request body
 */

export const validateRequestBody = (schema: ZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            console.log('Request Body is Valid');
            next();
        } catch (error) {
            // If the validation fails
            return res.status(400).json({
                message: 'Invalid request body',
                success: false,
                error: error,
            });
        }
    };
};

export const validateQueryParams = (schema: ZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.query);
            console.log('Query Params are valid');
            next();
        } catch (error) {
            // If the validation fails
            return res.status(400).json({
                message: 'Invalid query params',
                success: false,
                error: error,
            });
        }
    };
};
