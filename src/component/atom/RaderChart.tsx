import styled from "@emotion/styled";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import produce from "immer";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const options: ChartOptions<"radar"> = {
  // showLine: false, // 線非表示
  // backgroundColor: "rgba(255, 99, 132, 0.5)",
  // borderColor: "rgba(255, 99, 132, 1)",

  // animation: false, // アニメーション無効

  scales: {
    r: {
      min: 0,
      max: 5,
      angleLines: {
        display: false, // 中心から頂点に伸びる線の非表示
      },
      grid: {
        display: false, // 中心から破門状に広がる線の非表示
      },
      ticks: {
        stepSize: 1,
        display: false, // 目盛りテキストの非表示
      },
      pointLabels: {
        font: {
          size: 12,
          family: "'Noto Sans JP'",
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0, // 点を非表示
    },
  },
};

const initialData: ChartData<"radar"> = {
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
      order: 3,
    },
    {
      label: "standard line",
      data: [3, 3, 3, 3, 3, 3],
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(157,	207,	231, 1)",
      order: 1,
    },
    {
      label: "data line",
      data: [0, 0, 0, 0, 0],
      backgroundColor: "rgba(252,	205,	196, 0.7)",
      borderColor: "rgba(0, 0, 0, 0)",
      order: 2,
    },
  ],
};

const Wrapper = styled.div`
  width: 100%;
`;

type RadarChartProps = {
  buildingData: number[];
};

const RadarChart = ({ buildingData }: RadarChartProps) => {
  const updateData = produce(initialData, (draft) => {
    draft.datasets[2].data = buildingData;
  });

  return (
    <Wrapper>
      <Radar data={updateData} options={options} />
    </Wrapper>
  );
};

export default RadarChart;
