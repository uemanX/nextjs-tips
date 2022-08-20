import styled from "@emotion/styled";

const duration = `200ms`;

const TextFieldWrapper = styled.div`
  display: inline-block;
  position: relative;

  // 未入力時
  & > input {
    padding: 1em;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    border: 2px solid var(--gray);
  }
  & > input::placeholder {
    color: transparent;
  }
  & > input + span {
    position: absolute;
    left: 0.8em;
    transform-origin: left top;
    transition-duration: ${duration};
    pointer-events: none;
    padding: 0.2em 0.4em;
  }
  & > input + span::after {
    content: attr(data-placeholder);
  }
  & > input + span::after {
    color: var(--gray);
  }
  & > input:placeholder-shown + span {
    top: 0.8em;
    background-color: transparent;
    transform: scale(1);
  }

  // ホバー時
  & > input:hover {
    transition-duration: ${duration};
    border-color: rgba(0, 0, 0, 0.4);
  }

  // フォーカス時
  & > input:focus {
    border-color: var(--green);
  }
  & > input:focus + span::after {
    color: var(--green);
  }

  // フォーカス時 or 入力済み
  & > input + span,
  & > input:focus + span {
    top: -0.8em;
    background-color: white;
    transform: scale(0.8);
  }

  // Diasbled
  & > input:disabled {
    pointer-events: none;
  }
`;

type TextFieldProps = {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
};

const TextField = ({ placeholder, disabled, value }: TextFieldProps) => {
  return (
    <TextFieldWrapper>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
      <span data-placeholder={placeholder}></span>
    </TextFieldWrapper>
  );
};

export default TextField;
