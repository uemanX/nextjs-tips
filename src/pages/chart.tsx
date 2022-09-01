import styled from "@emotion/styled";
import { NextPage } from "next";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  registerables,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { NodeNextRequest } from "next/dist/server/base-http/node";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
  // Tooltip // ホバーしたときのツールチップ
  // Legend // タイトル
);

const options: ChartOptions<"radar"> = {
  // showLine: false, // 線非表示
  // backgroundColor: "rgba(255, 99, 132, 0.5)",
  // borderColor: "rgba(255, 99, 132, 1)",
  scales: {
    r: {
      max: 5,
      min: 0,
      ticks: {
        stepSize: 1,
      },
      angleLines: {
        display: false, // 角度線の非表示
      },
      grid: {
        display: false, // メモリ線の非表示
      },
    },
  },
  elements: {
    point: {
      radius: 0, // 点を非表示
    },
  },
};

export const data = {
  labels: [
    "家賃の安さ",
    "部屋の広さ",
    "建物の新しさ",
    "駅の近さ",
    "路線の充実",
    ["エリアの", "にぎやかさ"], // ラベルを改行する場合は配列で指定
  ],
  datasets: [
    {
      label: "outside fixed line",
      data: [5, 5, 5, 5, 5, 5],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(129,	129	,129,	 1)",
    },
    {
      label: "inside fixed line",
      data: [2, 2, 2, 2, 2, 2],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(157,	207,	231, 1)",
    },
    {
      label: "data line",
      data: [5, 2, 2, 4, 4, 3],
      backgroundColor: "rgba(252,	205,	196, 0.7)",
      borderColor: "rgba(0, 0, 0, 0)",
    },
  ],
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Main = styled.main`
  // background: #f00;
  width: 500px;
`;

const ChartPage: NextPage = () => {
  return (
    <Wrapper>
      <Main>
        <Radar data={data} options={options} />
      </Main>
    </Wrapper>
  );
};

export default ChartPage;
