import User from "@/Interfaces/AuthUser";

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    flash: {
        message?: {
            type: string;
            details: string;
        };
    };
};
