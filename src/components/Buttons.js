import styled from "styled-components";

import { defaultTheme, typeScale, primaryFont } from "../utils";

const {
  spacing,
  primaryButtonBorderRadius,
  primaryButtonBoxShadow,
} = defaultTheme;

export const Button = styled.button`
  padding: ${spacing.spacing2} ${spacing.spacing3};
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  font-family: ${primaryFont};
  min-width: 100px;
  border-radius: ${primaryButtonBorderRadius};
  box-shadow: ${primaryButtonBoxShadow};
  transition: all 0.2s linear, color 0.2s linear;
  outline: none;

  &:hover,
  &:focus {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: none;
  border: 1px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: transparent;
  }
`;
