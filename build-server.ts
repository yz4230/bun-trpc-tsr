if (import.meta.main) {
  const OUTDIR = "dist";
  await Bun.$`rm -r ${OUTDIR}`;
  await Bun.build({
    entrypoints: ["src/server.ts"],
    outdir: OUTDIR,
    target: "bun",
    sourcemap: "linked",
  });
}
