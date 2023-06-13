import { components } from "./components";
import { primaryColors, themeColors } from "./themeColors";
import { typography } from "./typography";

export const THEMES = {
  DEFAULT: "DEFAULT",
  MY_CUSTOM_THEME: "MY_CUSTOM_THEME"
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const paleteCfg = { ...primaryColors, light: primaryColors[100] , ...themeColors };

const themesOptions = {
  [THEMES.DEFAULT]: {
    typography,
    breakpoints,
    components: { ...components },
    palette: {...paleteCfg},
  },
  [THEMES.MY_CUSTOM_THEME]: {
    typography,
    breakpoints,
    components: { ...components },
    palette: { ...paleteCfg },
  }
};

const themeOptions = (theme_choose: string | 'DEFAULT' | 'MY_CUSTOM_THEME') => {
  return themesOptions[theme_choose];
};

export default themeOptions;
