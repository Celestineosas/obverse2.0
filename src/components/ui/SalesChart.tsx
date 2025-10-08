"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "i", value: 20 },
  { name: "ii", value: 80 },
  { name: "iii", value: 50 },
  { name: "iv", value: 40 },
  { name: "v", value: 45 },
  { name: "vi", value: 95 },
  { name: "vii", value: 95 },
];

export default function SalesChart() {
  return (
    <Card className="px-3 py-5 bg-[#070707] border border-[#111111] rounded-[12px]">
      <CardContent className="px-4 py-0 flex flex-col gap-2">

     
        <h2 className="text-[#FFF3Ef] text-[20px] font-medium font-onest">86,578.00 USD</h2>

  
        <div className="h-20 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FF5C00"
                strokeWidth={2}
                dot={{ r: 3, fill: "#FF5C00" }}
              />
              <XAxis dataKey="name" hide />
              <Tooltip
                contentStyle={{
                  background: "#1a1a1a",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

     
        <p className="text-primary text-[14px] font-onest">
          Your sales went up by 12% this week.
        </p>
      </CardContent>
    </Card>
  );
}
