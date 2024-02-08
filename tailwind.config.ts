import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                colors: {
                    // add different colors here like "primary, secondary" or "one, two" or "black, white, gray" etc
                },
            },
        },
    },
    plugins: [],
};
export default config;
