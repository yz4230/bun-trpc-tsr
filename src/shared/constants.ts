export const IS_DEV = (process.env.NODE_ENV ?? "development") === "development";
export const DEFAULT_SERVER_PORT = IS_DEV ? 3001 : 3000;
export const TRPC_ENDPOINT = "/trpc";
