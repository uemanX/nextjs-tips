import { NextPage } from "next";
import Checkbox from "../component/atom/Checkbox";
import TextField from "../component/atom/TextField";

const CheckboxPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Checkbox />
      <Checkbox label="IDなし" />
      <Checkbox id="check" label="IDあり" />
    </div>
  );
};

export default CheckboxPage;
