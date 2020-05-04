import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Abr",
    Viajes: 24,
    amt: 24,
  },
  {
    name: "May",
    Viajes: 13,
    amt: 22,
  },
  {
    name: "Jun",
    Viajes: 98,
    amt: 22,
  },
  {
    name: "Jul",
    Viajes: 39,
    amt: 20,
  },
  {
    name: "Ago",
    Viajes: 48,
    amt: 21,
  },
];

export default class Chart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Viajes"
          stroke="#0091ff"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}
