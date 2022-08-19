import styled from "@emotion/styled";

const SwitchWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  & > label {
    cursor: pointer;
  }
`;

const StyledSwitch = styled.span`
  position: relative;

  & > input {
    opacity: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  & > span {
    position: relative;
    display: block;
    width: 58px;
    height: 32px;
    border-radius: 16px;
  }

  // 背景
  & > span::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 16px;
    background-color: gray;
    transition-duration: var(--duration);
    transition-property: background-color;
  }

  // つまみ
  & > span::after {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background-color: white;
    transition-duration: var(--duration);
  }

  & > input:checked + span::before {
    background-color: var(--green);
  }

  & > input:checked + span::after {
    left: 28px;
  }

  & > input:disabled {
    pointer-events: none;
  }

  & > input:disabled + span::before {
    opacity: 0.4;
  }
`;

type SwitchProps = {
  id?: string;
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
};

const Switch = ({ id, label, checked, disabled }: SwitchProps) => {
  return (
    <SwitchWrapper>
      <StyledSwitch>
        <input type="checkbox" id={id} disabled={disabled} checked={checked} />
        <span></span>
      </StyledSwitch>
      {label && <label htmlFor={id}>{label}</label>}
    </SwitchWrapper>
  );
};

export default Switch;
