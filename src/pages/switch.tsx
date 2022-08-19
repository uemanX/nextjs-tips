import { NextPage } from "next";
import Switch from "../component/atom/Switch";

const CheckboxPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Switch label="スイッチ" id="switch" />
      <Switch label="スイッチOFF-無効" id="switch_off_disabled" disabled />
      <Switch
        label="スイッチON-無効"
        id="switch_on_disabled"
        checked
        disabled
      />
    </div>
  );
};

export default CheckboxPage;
