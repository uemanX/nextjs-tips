import styled from "@emotion/styled";
import { NextPage } from "next";
import RadarChart from "../component/atom/RaderChart";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.section`
  width: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 20px;
`;

const SampleDataSet = [
  {
    label: "",
    data: [5, 2, 2, 4, 4, 3],
  },
  {
    label: "評価１",
    data: [1, 1, 1, 1, 1, 1],
  },
  {
    label: "評価2",
    data: [2, 2, 2, 2, 2, 2],
  },
  {
    label: "評価3",
    data: [3, 3, 3, 3, 3, 3],
  },
  {
    label: "評価4",
    data: [4, 4, 4, 4, 4, 4],
  },
  {
    label: "評価5",
    data: [5, 5, 5, 5, 5, 5],
  },
];

const ChartPage: NextPage = () => {
  return (
    <Wrapper>
      {SampleDataSet.map((dataset, i) => (
        <Content key={i}>
          <p style={{ fontSize: "20px" }}>{dataset.label}</p>
          <RadarChart buildingData={dataset.data} />
        </Content>
      ))}
    </Wrapper>
  );
};

export default ChartPage;
