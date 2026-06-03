import { z } from 'zod/v4';

export const pingSchema = z.object({
    message: z.string().min(1),
});
