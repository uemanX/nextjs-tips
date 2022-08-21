import { NextPage } from "next";
import Select from "../component/atom/Select";

const SelectPage: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Select>
        {[...Array(30)].map((_, idx) => (
          <option key={idx} value={idx}>
            {`${idx}`}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectPage;
