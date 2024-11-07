import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { vitePlugin as remix } from "@remix-run/dev";
// import morgan from "morgan";
// import { remixDevTools } from "remix-development-tools/vite";
// import { flatRoutes } from "remix-flat-routes";
// // import { defineConfig, type ViteDevServer } from "vite";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       include: "**/*.tsx",
//     }),
//   ],
//   server: {
//     watch: {
//       usePolling: true,
//     },
//   },
// });

export default defineConfig({
  build: { manifest: true },
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    // morganPlugin(),
    // remixDevTools(),
    // tsconfigPaths(),
    // remix({
    //   ignoredRouteFiles: ["**/*"],
    //   serverModuleFormat: "esm",
    //   routes: async (defineRoutes) => {
    //     return flatRoutes("routes", defineRoutes, {
    //       ignoredRouteFiles: ["**/*.test.{js,jsx,ts,tsx}", "**/__*.*"],
    //     });
    //   },
    // }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});

// function morganPlugin() {
//   return {
//     name: "morgan-plugin",
//     configureServer(server: ViteDevServer) {
//       return () => {
//         server.middlewares.use(morgan("tiny"));
//       };
//     },
//   };
// }
