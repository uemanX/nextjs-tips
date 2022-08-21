import { NextPage } from "next";

const SelectPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <select>
        <option value="">option</option>
      </select>
    </div>
  );
};

export default SelectPage;
