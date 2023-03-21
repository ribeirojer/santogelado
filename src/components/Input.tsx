import styled from "styled-components";

type Props = {
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  label?: string;
  type?: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    margin-bottom: 5px;
  }
`;

const InputField = styled.input<Props>`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#000"};
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #8e5572;
  }

  &::placeholder {
    color: #b2b2b2;
    font-size: 14px;
  }
`;

export const Input = ({
  backgroundColor,
  color,
  label,
  type,
  placeholder,
}: Props) => {
  return (
    <InputWrapper>
      {label && <label>{label}</label>}
      <InputField
        backgroundColor={backgroundColor}
        color={color}
        type={type}
        placeholder={placeholder}
      ></InputField>
    </InputWrapper>
  );
};
