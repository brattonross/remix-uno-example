import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'Fira Code', monospace",
    },
  },
  presets: [presetIcons(), presetUno()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
