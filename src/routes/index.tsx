import { tq } from "@/client/trpc";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import logo from "./assets/logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data } = useQuery(tq.hello.queryOptions());

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img src={logo} alt="logo" className="size-60" />
      <p>
        Edit <code>src/routes/index.tsx</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <a href="https://tanstack.com" target="_blank" rel="noopener noreferrer">
        Learn TanStack
      </a>
      <div>{data}</div>
      <Button className="w-xs">Hello</Button>
    </div>
  );
}
