# Stria Icons - React Starter Kit

This is a minimal starter kit for integrating Stria Icons into a React application built with Vite and Vitest.

## Prerequisites

- Node.js 18 or higher
- pnpm / npm / yarn

## Installation

1. Clone or download this template.
2. Install dependencies:
   ```bash
   pnpm install
   ```
   or
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
pnpm dev
```

Run tests:
```bash
pnpm test
```

## Usage

Example of rendering components:

```jsx
import { User, Home } from '@stria-icons/react';

function App() {
  return (
    <div>
      <User size={24} color="blue" />
      <Home size={20} />
    </div>
  );
}
```

## Licenses

- Code (compiler toolchain, wrappers, build scripts): MIT License
- Icon designs (SVGs in `/icons` directory): CC BY 4.0
