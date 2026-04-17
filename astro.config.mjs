// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	site: "https://ideacompass.md",
	trailingSlash: "always",
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Switzer",
			cssVariable: "--font-switzer",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Switzer-Variable.woff2"],
						weight: "normal",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/Switzer-VariableItalic.woff2"],
						weight: "normal",
						style: "italic",
					},
				],
			},
		},
	],
});
