import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			fontSize: {
				'xs': ['16px', '28px'],
				'sm': ['20px', '32px'],
				'md': ['24px', '36px'],
				'lg': ['28px', '48px'],
				'xl': ['36px', '56px'],
				'2xl': ['48px', '72px'],
				'3xl': ['64px', '84px'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				green: "#65E4A3",
				"dark-blue": "#0A2640",
				grey: "#777777",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [],
};
export default config;
