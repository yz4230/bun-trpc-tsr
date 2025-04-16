export async function getPublicAssets(options: { publicDir: string }) {
  const glob = new Bun.Glob(`${options.publicDir}/**/*`);
  let files = await Array.fromAsync(glob.scan());
  files = files.map((file) => file.slice(options.publicDir.length));
  return new Set(files);
}
