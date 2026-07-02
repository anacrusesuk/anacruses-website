/**
 * Anacruses Associates Ltd — Branding Standards
 * Centralized color and typography constants
 * Updated: 2 July 2026
 */

export const colors = {
  // Primary brand colors
  navy: '#1B2A4A',      // Main brand blue — use for headings, nav, hero sections
  gold: '#C9A84C',      // Accent color — use for CTAs, highlights, hover states
  
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Blue scale (for gradients, sections, backgrounds)
  blue: {
    50: '#F0F4F8',
    100: '#E1E8F0',
    200: '#C3D1E1',
    300: '#A5B8D0',
    400: '#879FBE',
    500: '#6986AC',
    600: '#546EA0',
    700: '#3F5688',
    800: '#2A3E70',
    900: '#1B2A4A',  // Same as navy primary
  },

  // Yellow/Gold scale (for CTAs and highlights)
  yellow: {
    400: '#FBBF24',
    500: '#F59E0B',
  },
};

export const typography = {
  fontFamily: {
    sans: '"Arial", sans-serif',
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
  },
};

/**
 * Usage Examples:
 * 
 * In JSX:
 * import { colors } from '@/lib/branding';
 * <div style={{ backgroundColor: colors.navy, color: colors.white }}>
 * 
 * In Tailwind classes:
 * Use Tailwind's color names: bg-blue-950 (navy), text-yellow-400 (gold)
 * These are preconfigured in tailwind.config.js
 * 
 * In CSS/Tailwind config:
 * const { colors } = require('./lib/branding');
 * // Then reference in theme.extend.colors
 */
