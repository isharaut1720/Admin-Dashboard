import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "6px"
          }}
          labelStyle={{ color: "black" }}
          itemStyle={{ color: "#4f46e5" }}
        />
        
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#4f46e5" 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}