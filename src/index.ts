import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const defaultCofig: Partial<Config> = {
    content: [

    ],
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
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "oklch(var(--b1))",
                foreground: "oklch(var(--bc))",
                "primary-foreground":"var(--primary-foreground)",
                "secondary-foreground": "var(--secondary-foreground)",
                "accent-foreground": "var(--accent-foreground)",

                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },

                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            // fontFamily: {
            //   sans: ["var(--font-sans)", ...fontFamily.sans],
            // },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                overlayShow: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                contentShow: {
                    from: {
                        opacity: " 0",
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
                },
            },

            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
}
export default plugin(
    function ({config}) { 
        config()
    },
    defaultCofig


)
