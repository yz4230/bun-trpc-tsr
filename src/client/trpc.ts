import type { AppRouter } from "@/server/trpc";
import { TRPC_ENDPOINT } from "@/shared/constants";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { queryClient } from "./tanstack-query";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: new URL(TRPC_ENDPOINT, location.origin),
    }),
  ],
});

export const tq = createTRPCOptionsProxy<AppRouter>({
  client: trpc,
  queryClient,
});
