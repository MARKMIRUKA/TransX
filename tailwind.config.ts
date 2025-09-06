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
			fontFamily: {
				sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
				display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],
				'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
				'2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
				'8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
				'9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: "hsl(var(--dark))",
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
				// Modern neutral palette
				neutral: {
					50: "hsl(var(--neutral-50))",
					100: "hsl(var(--neutral-100))",
					200: "hsl(var(--neutral-200))",
					300: "hsl(var(--neutral-300))",
					400: "hsl(var(--neutral-400))",
					500: "hsl(var(--neutral-500))",
					600: "hsl(var(--neutral-600))",
					700: "hsl(var(--neutral-700))",
					800: "hsl(var(--neutral-800))",
					900: "hsl(var(--neutral-900))",
					950: "hsl(var(--neutral-950))",
				},
				// Professional grayscale
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
				// Enhanced product colors
				blue: {
					primary: "hsl(var(--blue-primary))",
					secondary: "hsl(var(--blue-secondary))",
					tertiary: "hsl(var(--blue-tertiary))",
				},
				green: {
					primary: "hsl(var(--green-primary))",
					secondary: "hsl(var(--green-secondary))",
					tertiary: "hsl(var(--green-tertiary))",
				},
				purple: {
					primary: "hsl(var(--purple-primary))",
					secondary: "hsl(var(--purple-secondary))",
					tertiary: "hsl(var(--purple-tertiary))",
				},
				orange: {
					primary: "hsl(var(--orange-primary))",
					secondary: "hsl(var(--orange-secondary))",
					tertiary: "hsl(var(--orange-tertiary))",
				},
			},
			spacing: {
				'xs': 'var(--space-xs)',
				'sm': 'var(--space-sm)',
				'md': 'var(--space-md)',
				'lg': 'var(--space-lg)',
				'xl': 'var(--space-xl)',
				'2xl': 'var(--space-2xl)',
				'3xl': 'var(--space-3xl)',
				'4xl': 'var(--space-4xl)',
				'5xl': 'var(--space-5xl)',
				'6xl': 'var(--space-6xl)',
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
				"gradient-mesh": "radial-gradient(at 40% 20%, hsl(var(--blue-primary) / 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--purple-primary) / 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--green-primary) / 0.3) 0px, transparent 50%), radial-gradient(at 80% 50%, hsl(var(--orange-primary) / 0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(var(--blue-secondary) / 0.3) 0px, transparent 50%), radial-gradient(at 80% 100%, hsl(var(--purple-secondary) / 0.3) 0px, transparent 50%), radial-gradient(at 0% 0%, hsl(var(--orange-secondary) / 0.3) 0px, transparent 50%)",
				"modern-grid": "linear-gradient(rgba(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--neutral-200) / 0.5) 1px, transparent 1px)",
				"dot-pattern": "radial-gradient(circle, hsl(var(--neutral-300)) 1px, transparent 1px)",
			},
			backgroundSize: {
				"grid": "32px 32px",
				"dot": "24px 24px",
			},
			boxShadow: {
				"xs": "var(--shadow-xs)",
				"sm": "var(--shadow-sm)",
				"md": "var(--shadow-md)",
				"lg": "var(--shadow-lg)",
				"xl": "var(--shadow-xl)",
				"2xl": "var(--shadow-2xl)",
				"glow": "var(--shadow-glow)",
				"colored": "var(--shadow-colored)",
				"inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
