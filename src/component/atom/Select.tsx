import styled from "@emotion/styled";
import { ReactNode } from "react";

const SelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 200px;
  height: 40px;

  & > select {
    appearance: none;
    width: inherit;
    height: inherit;
    padding: 0 5px;
    border: 1px solid #999;
    border-radius: 5px;
  }
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  right: 10px;
  width: 7px;
  height: 7px;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  transform-origin: center;
  transform: rotate(45deg);
  pointer-events: none;
`;

type SelectProps = {
  children: ReactNode;
};

const Select = ({ children }: SelectProps) => {
  return (
    <SelectWrapper>
      <select>{children}</select>
      <Icon />
    </SelectWrapper>
  );
};

export default Select;
