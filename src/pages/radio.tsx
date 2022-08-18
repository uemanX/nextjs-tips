import { NextPage } from "next";
import Radio from "../component/atom/Radio";

const RadioPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Radio label="soccer" id="soccer" name="group" />
      <Radio label="baseball" id="baseball" name="group" />
    </div>
  );
};

export default RadioPage;

// TODO:　Tabキーによる移動もしたいな
