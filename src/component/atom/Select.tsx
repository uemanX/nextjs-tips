import { ReactNode } from "react";

type SelectProps = {
  children: ReactNode;
};

const Select = ({ children }: SelectProps) => {
  return <select>{children}</select>;
};

export default Select;
