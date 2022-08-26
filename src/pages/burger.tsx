import styled from "@emotion/styled";
import { NextPage } from "next";
import { useState } from "react";
import BurgerMenu from "../component/atom/BugerMenu";

const Header = styled.header`
  display: flex;
  flex-dirextion: row;
  justify-content: space-between;
  aligin-items: center;
`;

const Button = styled.button`
  padding: 20px;
  border-style: none;
  cursor: pointer;
  background-color: #99d199;
`;
const BurgerPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        {["left", "right", "top", "bottom"].map((v, i) => (
          <Button key={i} onClick={() => setOpen(true)}>
            {v}
          </Button>
        ))}
      </Header>

      <BurgerMenu open={open} onClose={() => setOpen(false)} />
      <ul>
        {[...Array(100)].map((v, idx) => (
          <li key={idx}>{idx}</li>
        ))}
      </ul>
    </>
  );
};

export default BurgerPage;
