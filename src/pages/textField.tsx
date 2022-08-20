import { NextPage } from "next";
import TextField from "../component/atom/TextField";

const TextFieldPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField placeholder="name" />
      <TextField placeholder="氏名" />
      <TextField placeholder="disabled" disabled value="無効" />
    </div>
  );
};

export default TextFieldPage;
