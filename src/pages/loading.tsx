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

const LoadingPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button onClick={() => setOpen(true)}>Show BackDrap</Button>
      <Loader open={open} onClick={() => setOpen(false)} />
    </div>
  );
};

export default LoadingPage;
