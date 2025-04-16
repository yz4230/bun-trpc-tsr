import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { once } from "es-toolkit";
import { join } from "node:path";
import { globPublicAssets } from "./server/assets";
import { appRouter } from "./server/trpc";
import { DEFAULT_SERVER_PORT, IS_DEV, TRPC_ENDPOINT } from "./shared/constants";
import { getLazy } from "./shared/lazy";

const getPublicDir = getLazy(() => join(import.meta.dir, "public"));
const getPublicAssets = getLazy(async () => {
  const assets = await globPublicAssets({ publicDir: getPublicDir() });
  return new Set(assets);
});

const server = Bun.serve({
  port: Bun.env.PORT ?? DEFAULT_SERVER_PORT,
  development: IS_DEV,
  fetch: async (request) => {
    const url = new URL(request.url);

    if (url.pathname.startsWith(TRPC_ENDPOINT)) {
      return fetchRequestHandler({
        endpoint: TRPC_ENDPOINT,
        req: request,
        router: appRouter,
      });
    }

    if (IS_DEV) return new Response("Not found", { status: 404 });

    const publicDir = getPublicDir();
    const publicAssets = await getPublicAssets();
    if (publicAssets.has(url.pathname)) {
      const file = Bun.file(join(publicDir, url.pathname));
      return new Response(file);
    }
    return new Response(Bun.file(join(publicDir, "index.html")));
  },
});

const shutdown = once(async () => {
  await server.stop();
  process.exit(0);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

console.log(`Server running at: ${server.url}`);
