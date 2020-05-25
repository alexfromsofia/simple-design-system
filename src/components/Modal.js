import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { SignUp } from "../assets";
import { PrimaryButton } from "./Buttons";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.formElementBackground};
  color: ${({ theme }) => theme.textOnFormElement};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.h3`
  font-size: ${typeScale.paragraph};
  text-align: center;
  max-width: 70%;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px;
  padding: 0;

  svg {
    fill: ${({ theme }) => theme.iconColor};
  }
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={SignUp} alt="" aria-hidden="true" />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign Up to get access!</SignUpText>
      <PrimaryButton>Sign up!</PrimaryButton>
      <CloseModalButton aria-label="Close modal">
        <Close />
      </CloseModalButton>
    </ModalWrapper>
  );
};
