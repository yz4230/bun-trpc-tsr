FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=prerelease /usr/src/app/dist .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "server.js" ]
