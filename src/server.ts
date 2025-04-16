import { once } from "es-toolkit";
import { join } from "node:path";
import { getPublicAssets } from "./server/assets";

const isDEV = process.env.NODE_ENV === "development";

const publicDir = join(import.meta.dir, "public");
const publicAssets = await getPublicAssets({ publicDir });

const server = Bun.serve({
  port: Bun.env.PORT ?? 3001,
  development: isDEV,
  fetch: (req) => {
    const url = new URL(req.url);

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
