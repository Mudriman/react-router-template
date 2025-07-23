import { defineConfig, loadEnv } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer,],
      },
    },
    plugins: [reactRouter(), tsconfigPaths(), netlifyPlugin()],
    define: {
      // делаем переменные доступными в рантайме
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'process.env.VITE_BRATSTVO_WEBSITE_URL': JSON.stringify(env.VITE_BRATSTVO_WEBSITE_URL),
      'process.env.VITE_TG_CHANNEL': JSON.stringify(env.VITE_TG_CHANNEL),
    },
    build: {
      // любые build-настройки
    },
  };
});
