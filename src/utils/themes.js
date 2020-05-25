import { blue, neutral } from "./colors";
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
  spacing,
};
