export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "#00E5FF",    // New main color replacing green
          blue: "#3FA9F5",
          yellow: "#FFD43B",
          red: "#FF6B6B",
        },
        neutral: {
          dark: "#1A1A1A",
          mid: "#9CA3AF",
          light: "#2A2A2A",
          white: "#FFFFFF",
        },
        status: {
          success: "#00E5FF",  // Updated from green
          warning: "#FFA94D",
          danger: "#FF6B6B",
          info: "#0CA678",
        },
        dark: {
          900: "#111111",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3A3A3A",
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
}