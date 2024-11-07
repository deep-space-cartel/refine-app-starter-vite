# refine-app-starter-vite

```bash
npm i -D morgan @types/morgan
npm i remix-development-tools
@remix-run/dev
remix-development-tools/vite
```

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { unstable_vitePlugin as remix } from "@remix-run/dev";
import morgan from "morgan";
import { defineConfig, type ViteDevServer } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    morganPlugin(),
    remix(),
    tsconfigPaths(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
```
