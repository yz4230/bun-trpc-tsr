if (import.meta.main) {
  await Bun.build({
    entrypoints: ["src/server.ts"],
    outdir: "dist",
    target: "bun",
    sourcemap: "linked",
  });
}
