import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  background?: string;
  color?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

const ButtonWrapper = styled.button<Props>`
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 12px 60px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  border: 2px solid ${({ background }) => background};
  font-weight: 700;

  &:hover {
    color: ${({ background }) => background};
    background-color: ${({ color }) => color};
    border: 2px solid ${({ background }) => background};
    font-weight: 700;
  }
`;

const Button = ({
  background = "#2e1c20",
  color = "#ffffff",
  children,
  type = "button",
}: Props) => {
  return (
    <ButtonWrapper type={`${type}`} background={background} color={color}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
