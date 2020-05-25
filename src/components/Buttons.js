import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { defaultTheme, typeScale, primaryFont } from "../utils";
const {
  spacing,
  primaryButtonBorderRadius,
  primaryButtonBoxShadow,
} = defaultTheme;

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: ${spacing.spacing1};
    `,
  large: () => `
      font-size: ${typeScale.header1};
      padding: ${spacing.spacing2} ${spacing.spacing3};
    `,
  warning: ({ theme }) => `
    background: none;
    color: ${theme.status.warningColor};
    border-color: ${theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({ theme }) => `
    background: none;
    color: ${theme.status.errorColor};
    border-color: ${theme.status.errorColor};

    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  success: ({ theme }) => `
    background: none;
    color: ${theme.status.successColor};
    border-color: ${theme.status.successColor};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border: 2px solid ${theme.status.warningColor};
  `,
};

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
  color: ${({ theme }) => theme.textColorOnPrimary};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primaryColorHover};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryColorActive};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.primaryColor};
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textOnDisabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};

  &:disabled {
    background: none;
    color: ${({ theme }) => theme.disabled};
    border-color: ${({ theme }) => theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primaryColor};

  &:disabled {
    background: none;
    color: ${({ theme }) => theme.disabled};
    border-color: transparent;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
