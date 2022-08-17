import styled from "@emotion/styled";

const CheckboxWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  & > label {
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.span`
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
    width: 26px;
    height: 26px;
  }

  // 枠
  & > span::before {
    position: absolute;
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    border: 3px solid var(--green);
    border-radius: 5px;
  }

  // レ点
  & > span::after {
    content: "";
    display: block;
    width: 7px;
    height: 14px;
    position: absolute;
    top: 5px;
    left: 10px;
    border-right: 3px solid var(--green);
    border-bottom: 3px solid var(--green);
    transform-origin: center;
    rotate: 45deg;
    transform: scale(0);
    transition-duration: var(--duration);
  }

  // チェック時にレ点を表示
  & > input:checked + span::after {
    transform: scale(1);
  }
`;

type CheckboxProps = {
  id?: string;
  label?: string;
};

const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox>
        <input type="checkbox" id={id} />
        <span></span>
      </StyledCheckbox>
      {label && <label htmlFor={id}>{label}</label>}
    </CheckboxWrapper>
  );
};

export default Checkbox;
