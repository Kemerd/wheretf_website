import { DefaultTheme } from 'styled-components';

// Define our theme with a modern, sleek color palette and typography
const theme: DefaultTheme = {
    colors: {
        primary: '#000000',
        secondary: '#1A1A1A',
        accent: '#007AFF', // Apple's blue
        text: {
            primary: '#FFFFFF',
            secondary: '#A1A1A6',
            accent: '#007AFF',
        },
        background: {
            primary: '#000000',
            secondary: '#1A1A1A',
            gradient: 'linear-gradient(180deg, rgba(0,122,255,0.15) 0%, rgba(0,0,0,0) 100%)',
        },
    },
    typography: {
        fontFamily: {
            primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            monospace: 'SF Mono, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
    },
    breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    animation: {
        spring: {
            default: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
            soft: {
                type: 'spring',
                stiffness: 200,
                damping: 25,
            },
            bouncy: {
                type: 'spring',
                stiffness: 400,
                damping: 15,
            },
        },
        duration: {
            fast: 0.2,
            normal: 0.3,
            slow: 0.5,
        },
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
    },
};

export default theme; 