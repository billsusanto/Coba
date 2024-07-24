import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue : {
          'light': '#AAE2F1',
          'default': '#4299E0',
          'dark': '#615ACA',
        },
        gray: {
          'sidebar': '#1E1E1E',
          'sidebar-hover': '#434343',
        }
      },
      height: {
        'half-screen': '50vh',
        'one-third-screen': '40vh',
        'two-third-screen': '80vh',
        'projectPage': 'calc(100vh - 13.5rem)',
        'profilePage': 'calc(100vh - 30rem)',
      },
      width: {
        'search-bar': '30vw',
        'half-screen-width' : '50vw',
        'one-third-width' : '45%',
        'projectPage': '63vw',
        'profilePage': '63vw',
      },
      boxShadow: {
        'blueShadow': '0 8px 20px 5px rgba(66, 153, 225, 0.5), 0 4px 8px 5px rgba(66, 153, 225, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
