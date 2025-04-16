# Bun-tRPC-TSR Boilerplate

A modern, full-stack TypeScript boilerplate featuring Bun, tRPC, and TanStack Router/Query.

## Tech Stack

- **[Bun](https://bun.sh/)**: A fast all-in-one JavaScript runtime, package manager, and bundler
- **[tRPC](https://trpc.io/)**: End-to-end typesafe APIs with TypeScript
- **[TanStack Router](https://tanstack.com/router)**: Type-safe file-based routing for React
- **[TanStack Query](https://tanstack.com/query)**: Powerful data synchronization for React
- **[React 19](https://react.dev/)**: The latest version of React
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing for JavaScript
- **[Vite](https://vitejs.dev/)**: Next generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework

## Getting Started

### Prerequisites

- Install [Bun](https://bun.sh): `curl -fsSL https://bun.sh/install | bash`

### Development

1. Clone this repository and navigate to the project directory
2. Install dependencies:

    ```bash
    bun install
    ```

3. Start the development server:

    ```bash
    bun run dev
    ```

This will concurrently run:

- Client development server at <http://localhost:3000>
- tRPC server at the configured port

### Building for Production

```bash
bun run build
```

### Serving Production Build

```bash
bun run serve
```

## Project Structure

```plain
├── src/
│   ├── client/                  # Client-specific code
│   │   ├── reportWebVitals.ts   # Web vitals reporting
│   │   ├── tanstack-query.ts    # TanStack Query setup
│   │   └── trpc.ts              # tRPC client setup
│   ├── routes/                  # File-based routes
│   │   ├── __root.tsx           # Root layout
│   │   └── index.tsx            # Home page
│   ├── server/                  # Server-specific code
│   │   ├── assets.ts            # Assets serving
│   │   └── trpc.ts              # tRPC router setup
│   ├── shared/                  # Shared code between client and server
│   ├── client.tsx               # Client entry point
│   ├── routeTree.gen.ts         # Generated route tree
│   ├── server.ts                # Server entry point
│   └── styles.css               # Global styles
├── public/                      # Static assets
├── build-server.ts              # Server build script
└── vite.config.js               # Vite configuration
```

## Features

### End-to-End Type Safety

Using tRPC allows for seamless integration between your frontend and backend with full TypeScript type safety. No more API documentation or runtime type checking needed - everything is enforced at build time.

### Optimized Development Experience

- File-based routing with TanStack Router
- Fast refresh with Vite
- TanStack Query for data fetching and state management
- Bun for ultra-fast JavaScript execution and package management

## Customizing

This boilerplate is designed as a starting point for your projects. Feel free to:

- Modify the directory structure to fit your needs
- Add additional libraries for state management, styling, etc.
- Extend the tRPC routers with your own procedures

## Testing

This project uses Vitest for testing:

```bash
bun run test
```

## Linting and Formatting

```bash
# Run ESLint
bun run lint

# Format code with Prettier
bun run format
```

## Learn More

- [Bun Documentation](https://bun.sh/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [TanStack Router Documentation](https://tanstack.com/router/latest/docs/framework/react/overview)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
