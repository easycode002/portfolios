# Sothea Mab

<details>

<summary>How to setup `NextJS` project and config tailwindcss</summary>

### Setup nextjs project

```sh
bun create next-app
```

### Install and config tailwindcss for nextjs

- Install tailwindcss
  ```sh
  bun add tailwindcss postcss autoprefixer
  ```
- Generate TailwindCSS and Config file
  ```sh
  npx tailwindcss init -p
  ```
- Config `tailwindcss.config.js`

```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {},
},
  plugins: [],
};
```

### Custome OutDir in nextjs

```sh
// next.config.ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  distDir: "build",
};
export default nextConfig;
```

</details>

---

<details>

<summary>How to custome alias path for nextjs project</summary>

### Custome alias path

```sh
// tsconfig.json
{
  "compilerOptions": {
    ...
    "baseUrl": ".",  // Base URL for resolving modules
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["./app/components/*"],
      "@utils/*": ["./utils/*"]
    }
  },
  ...
  "exclude": [
    "node_modules"
  ]
}
```

</details>

---

<details>

<summary>How to config font and use in app</summary>

### Download font and move all to public folder

```sh
public/fonts/Ubuntu-Regular.ttf
```

### Add config in global.css

```sh
/* app/globals.css */

/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ubuntu-Bold font */
@font-face {
  font-family: "Ubunto-Bold";
  src: url("../public/fonts/Ubuntu-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Ubuntu-Light font */
@font-face {
  font-family: "Ubuntu-Light";
  src: url("../public/fonts/Ubuntu-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Ubuntu-Regular font */
@font-face {
  font-family: "Ubuntu-Regular";
  src: url("../public/fonts/Ubuntu-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Ubuntu-Regular font */
@font-face {
  font-family: "Kantumruy";
  src: url("../public/fonts/Kantumruy.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Global font style */
body {
  font-family: "Ubuntu-Light", sans-serif;
}
```

### Config font in `tailwind.config.js`

```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntubold: ["Ubunto-Bold", "sans-serif"],
        ubuntulight: ["Ubuntu-Light", "sans-serif"],
        ubunturegular: ["Ubuntu-Regular", "sans-serif"],
        kantumruy: ["Kantumruy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### Sample to use font

```sh
export default function Home() {
  return (
    <div className="w-full items-center justify-center flex">
      <main>
        <h1 className="font-kantumruy text-green-500 font-bold text-5xl">សួរស្ដី</h1>
      </main>
    </div>
  );
}
```

</details>



bun add lucide
bun remove lucide
bun add class-variance-authority
bun add tailwind-merge