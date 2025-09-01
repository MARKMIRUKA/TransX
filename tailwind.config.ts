import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// Professional color palette
				white: {
					50: "hsl(var(--white-50))",
					100: "hsl(var(--white-100))",
					200: "hsl(var(--white-200))",
					300: "hsl(var(--white-300))",
				},
				black: {
					50: "hsl(var(--black-50))",
					100: "hsl(var(--black-100))",
					200: "hsl(var(--black-200))",
					300: "hsl(var(--black-300))",
				},
				gray: {
					50: "hsl(var(--gray-50))",
					100: "hsl(var(--gray-100))",
					200: "hsl(var(--gray-200))",
					300: "hsl(var(--gray-300))",
					400: "hsl(var(--gray-400))",
					500: "hsl(var(--gray-500))",
					600: "hsl(var(--gray-600))",
					700: "hsl(var(--gray-700))",
					800: "hsl(var(--gray-800))",
					900: "hsl(var(--gray-900))",
				},
				// Product accent colors
				blue: {
					primary: "hsl(var(--blue-primary))",
					secondary: "hsl(var(--blue-secondary))",
				},
				green: {
					primary: "hsl(var(--green-primary))",
					secondary: "hsl(var(--green-secondary))",
				},
				purple: {
					primary: "hsl(var(--purple-primary))",
					secondary: "hsl(var(--purple-secondary))",
				},
				orange: {
					primary: "hsl(var(--orange-primary))",
					secondary: "hsl(var(--orange-secondary))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				// Professional animations
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"slide-up-sequence": {
					"0%": {
						opacity: "0",
						transform: "translateY(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				"pulse-glow": {
					"0%, 100%": {
						boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
					},
					"50%": {
						boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				// Professional animation classes
				"fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"fade-in-left": "fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"fade-in-right": "fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"scale-in": "scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"slide-up-sequence": "slide-up-sequence 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
				"float": "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			},
			backgroundImage: {
				"gradient-primary": "linear-gradient(135deg, hsl(var(--blue-primary)), hsl(var(--purple-primary)))",
				"gradient-secondary": "linear-gradient(135deg, hsl(var(--green-primary)), hsl(var(--blue-secondary)))",
				"gradient-accent": "linear-gradient(135deg, hsl(var(--orange-primary)), hsl(var(--purple-secondary)))",
				"professional-grid": "linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
			},
			backgroundSize: {
				"grid": "40px 40px",
			},
			boxShadow: {
				"professional": "0 8px 32px rgba(0, 0, 0, 0.1)",
				"card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
