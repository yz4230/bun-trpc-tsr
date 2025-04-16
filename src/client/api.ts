import type { AppRouter } from "@/server/trpc";
import { TRPC_ENDPOINT } from "@/shared/constants";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: new URL(TRPC_ENDPOINT, location.origin),
    }),
  ],
});
