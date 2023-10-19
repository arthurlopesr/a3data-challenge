const lightScheme = {
  grey25: "#fefefe",
  grey50: "#fcfcfc",
  grey100: "#fafafa",
  grey200: "#f5f5f5",
  grey300: "#f0f0f0",
  grey400: "#dedede",
  grey500: "#c2c2c2",
  grey600: "#979797",
  grey700: "#818181",
  grey800: "#606060",
  grey900: "#3c3c3c",

  background: "#f5f5f5",
  backgroundA: "#fafafa57",

  surface: "#fefefe",

  error: "#C92A2A",

  textColor: "#1b1b1b",
  iconColor: "#1b1b1b",

  lightPink: "#E3279E",
  deepPink: "#F5039C",
  lightBlue: "#1F3AE8",
  primary: "#081C73",
};

const aThreeDataTheme = {
  colors: {
    ...lightScheme,
    primary: "#081C73",
  },

  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "10px",
    xlg: "20px",
    full: "999px",
  },

  space: {
    px: "1px",
    1: "0.25rem",
    2: "0.50rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.21rem",
    6: "1.50rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.5rem",
    10: "3rem",
    11: "3.5rem",
    12: "4rem",
    13: "4.5rem",
    14: "5rem",
    15: "5.5rem",
    20: "8rem",
    30: "13rem",
    40: "18rem",
    50: "23rem",
    60: "30rem",
    80: "36rem",
  },

  breakpoint: {
    xs: "@media (min-width: 300px)",
    sm: "@media (min-width: 576px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 992px)",
    xl: "@media (min-width: 1090px)",
    "2xl": "@media (min-width: 1200px)",
  },
};

export type AThreeDataTheme = typeof aThreeDataTheme;

export type ThemeProps = { theme?: AThreeDataTheme };

export type ColorsScheme = keyof AThreeDataTheme["colors"];
export type BorderRadiusScheme = keyof AThreeDataTheme["borderRadius"];
export type SpacesScheme = keyof AThreeDataTheme["space"];
export type BreakPointsScheme = keyof AThreeDataTheme["breakpoint"];

export default aThreeDataTheme;
