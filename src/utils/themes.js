import { blue, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

const borderRadius = "30px";
const boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
const spacing = {
  main: 8,
  get spacing1() {
    return `${this.main}px`;
  },
  get spacing2() {
    return `${this.main * 2}px`;
  },
  get spacing3() {
    return `${this.main * 3}px`;
  },
  get spacing4() {
    return `${this.main * 4}px`;
  },
  get spacing5() {
    return `${this.main * 5}px`;
  },
  get spacing6() {
    return `${this.main * 6}px`;
  },
};

export const defaultTheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textOnDisabled: neutral[300],
  disabled: neutral[400],
  primaryFont,
  primaryButtonBorderRadius: borderRadius,
  primaryButtonBoxShadow: boxShadow,
  formElementBackground: neutral[100],
  textOnFormElement: neutral[600],
  spacing,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  ...defaultTheme,
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: blue[100],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  formElementBackground: blue[100],
  textOnFormElement: neutral[600],
};
