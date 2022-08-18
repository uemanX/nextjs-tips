import styled from "@emotion/styled";

const RadioWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  & > label {
    cursor: pointer;
  }
`;

const StyledRadio = styled.span`
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
    border-radius: 50%;
  }

  // レ点
  & > span::after {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    transform-origin: center;
    transform: scale(0);
    border-radius: 50%;
    background: var(--green);
    transition-duration: var(--duration);
  }

  // チェック時に中丸を表示
  & > input:checked + span::after {
    transform: scale(0.5);
  }

  & > input:disabled {
    pointer-events: none;
  }

  & > input:disabled + span::before {
    border-color: var(--gray);
  }

  & > input:disabled + span::after {
    background: var(--gray);
  }
`;

type RadioProps = {
  id?: string;
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
};

const Radio = ({ id, label, name, checked, disabled }: RadioProps) => {
  return (
    <RadioWrapper>
      <StyledRadio>
        <input type="radio" id={id} name={name} />
        <span></span>
      </StyledRadio>
      <label htmlFor={id}>{label}</label>
    </RadioWrapper>
  );
};

export default Radio;
