import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./ChatApp": "./src/App",
      },
      shared: ["react", "react-dom", "lucide-react"],
    }),
  ],
});
