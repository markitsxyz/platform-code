import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F7F7F7',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

// markits color palettes - professional matching landing page
const PRIMARY = {
  lighter: '#66E5FF', // Light cyan
  light: '#33D1FF', // Cyan
  main: '#00D9FF', // Primary cyan - matching landing
  dark: '#00B8D9', // Darker cyan
  darker: '#0099B3', // Darkest cyan
  contrastText: '#0A0E27', // Dark text for contrast
};

const SECONDARY = {
  lighter: '#FF4DA6', // Light magenta
  light: '#FF1A8C', // Magenta
  main: '#FF006E', // Primary magenta - matching landing
  dark: '#CC0058', // Darker magenta
  darker: '#990042', // Darkest magenta
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#67E8F9', // Light cyan
  light: '#22D3EE', // Cyan
  main: '#06B6D4', // Cyan-500
  dark: '#0891B2', // Cyan-600
  darker: '#0E7490', // Cyan-700
  contrastText: '#FFFFFF',
};
const SUCCESS = {
  lighter: '#76D7A4',
  light: '#5BC98C',
  main: '#42C77A',
  dark: '#379E68',
  darker: '#2E8555',
  contrastText: '#ffffff',
};

const WARNING = {
  lighter: '#FFE066',
  light: '#FFD700',
  main: '#FFCC00',
  dark: '#E6B800',
  darker: '#CCA300',
  contrastText: '#333333',
};

const ERROR = {
  lighter: '#FF9B9B',
  light: '#FF7C7C',
  main: '#FF5C5C',
  dark: '#E63232',
  darker: '#CC2929',
  contrastText: '#FFFFFF',
};

// Common colors
const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  // Retaining other color definitions
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: '#212B36', // Main text color
      secondary: '#637381',
      disabled: '#919EAB',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F7F7F7', // Background color
      neutral: '#F4F6F8',
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: "#181B2A", // Dark navy matching landing page
      default: '#0F1419', // Dark background matching landing
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };
  
  return mode === 'light' ? light : dark;
}
