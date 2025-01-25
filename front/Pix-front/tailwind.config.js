/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      inter: 'Inter, sans-serif',
    },
    fontSize: {
      'title-h1': ['48px', { lineHeight: '64px' }],
      'title-h2': ['40px', { lineHeight: '52px' }],
      'title-h3': ['32px', { lineHeight: '42px' }],
      'title-h4': ['24px', { lineHeight: '32px' }],
      'title-h5': ['20px', { lineHeight: '28px' }],
      'title-h6': ['16px', { lineHeight: '20px' }],
      'body-lg': ['18px', { lineHeight: '28px' }],
      'body-md': ['16px', { lineHeight: '24px' }],
      'body-sm': ['14px', { lineHeight: '20px' }],
      'body-xs': ['12px', { lineHeight: '16px' }],
    },
    colors: {
      black: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000',
      },
      'cerulean-blue': {
        50: '#f1f5fd',
        100: '#dfe9fa',
        200: '#c6d8f7',
        300: '#9fbff1',
        400: '#719de9',
        500: '#507be1',
        600: '#3056d3',
        700: '#324cc3',
        800: '#2e3f9f',
        900: '#2a397e',
        950: '#1e254d',
      },
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
