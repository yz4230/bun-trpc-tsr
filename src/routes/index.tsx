import { trpc } from "@/client/api";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  useEffect(() => {
    trpc.hello.query().then((data) => {
      console.log("Hello world response:", data);
    });
  }, []);

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
    </div>
  );
}
