import styled from "@emotion/styled";
import { NextPage } from "next";
import { useState } from "react";
import Loader from "../component/atom/Loader";

const Button = styled.button`
  padding: 20px;
  border-style: none;
  cursor: pointer;
  background-color: #99d199;
`;

// TODO
// opacity: 0;
// visibility hidden;
// 他のところをkリックしたら閉じる

const LoadingPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button onClick={() => setOpen(true)}>Show BackDrap</Button>
      {open && <Loader />}
    </div>
  );
};

export default LoadingPage;
