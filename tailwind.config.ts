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
        },
      },
      height: {
        'half-screen': '50vh',
        'one-third-screen': '40vh',
        'two-third-screen': '80vh',
        'projectPage': 'calc(100vh - 13.5rem)',
        'profilePage': 'calc(100vh - 55rem)',
      },
      width: {
        'search-bar': '30vw',
        'half-screen-width' : '50vw',
        'one-third-width' : '45%',
        'projectPage': '55vw',
        'profilePage': '85vw',
      },
      boxShadow: {
        'blueShadow': '0 8px 20px 5px rgba(66, 153, 225, 0.5), 0 4px 8px 5px rgba(66, 153, 225, 0.3)',
      },
      padding: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
      },
    },
  },
  plugins: [],
};
export default config;
