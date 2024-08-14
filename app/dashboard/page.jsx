"use client";
import HistoryCard from "../components/HistoryCard";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  scales,
  plugins,
} from "chart.js";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

export default function Dashboard() {


  let sum = 0;
  const [mockData, setMockData] = useState([120, 121, 120, 122, 123, 121, 121]);

  mockData.forEach((num) => {
    sum += num;
  });
  const lineData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [...mockData],
        fill: mockData.length > 2 ? true : false,
        tension: 0.1,
        display: false,
        label: "Weight",
        borderColor: "rgb(249 115 22)",
        backgroundColor: 'rgba(0,0,0,0.5)',
        pointRadius: 5,
      },
    ],
  };

  const config = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center text-white pt-28 pb-28 bg-neutral-800 w-full min-h-full h-full">
      <section></section>

      <section className="flex flex-col w-5/6">
        <div className="flex flex-col text-left items-center justify-center">
          <h1 className="text-2xl mb-2"> My progress </h1>

          <section className="grid grid-cols-3  gap-2">
            <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {120}
              <p className="text-sm"> Current </p>
            </div>

            <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {140}
              <p className="text-sm"> Goal </p>
            </div>

            <div className="flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {Math.abs(Number(140 - 120))}
              <p className="text-sm"> Left </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col text-left items-center justify-center mt-6">
          <h1 className="text-2xl mb-2"> Trends </h1>

          <section className="grid grid-cols-3  gap-2">
            <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {(sum / mockData.length).toFixed(2)}
              <p className="text-sm"> Average </p>
            </div>

            <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {mockData.reduce((a, b) => Math.max(a, b), -Infinity)}
              <p className="text-sm"> High </p>
            </div>

            <div className="flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 min-w-24 rounded-sm text-2xl">
              {mockData.reduce((a, b) => Math.min(a, b), Infinity)}
              <p className="text-sm"> Low </p>
            </div>
          </section>
        </div>

        <section className="flex flex-col justify-center items-center w-full h-80 mt-6">
          <Line options={config} data={lineData} />
        </section>

        <section className="flex flex-col items-center w-full mt-6">
          <section className="flex flex-row gap-2 min-w-80 items-center justify-between mb-2">
            <h1 className="text-xl"> History </h1>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  variant="outline"
                  className="flex flex-row items-center gap-2 p-2 hover:bg-black rounded-md duration-300"
                >
                  Add weight <PlusCircledIcon height={25} width={25} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add weight</DialogTitle>
                  <DialogDescription>
                    Log your weight here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <input
                      id="name"
                      defaultValue="Weight"
                      className="col-span-3 border border-gray-300 rounded-xl px-4 py-2"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <input
                      id="username"
                      defaultValue="Date"
                      className="col-span-3 border border-gray-300 rounded-xl px-4 py-2"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="hover:bg-neutral-500 p-2 rounded-md duration-300"
                  >
                    Save changes
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </section>

          <section className="flex flex-col items-center gap-2 min-w-96 h-80 border-2 border-neutral-500 rounded-md overflow-y-scroll overflow-x-hidden">
            <HistoryCard date={"1 August, Sat"} weight={mockData[0]} />
            <HistoryCard date={"2 August, Sun"} weight={mockData[1]} />
            <HistoryCard date={"4 August, Sat"} weight={mockData[2]} />
            <HistoryCard date={"5 August, Sun"} weight={mockData[3]} />
            <HistoryCard date={"6 August, Sat"} weight={mockData[4]} />
            <HistoryCard date={"7 August, Sun"} weight={mockData[5]} />
            <HistoryCard date={"8 August, Sun"} weight={mockData[6]} />
          </section>
        </section>
      </section>
    </div>
  );
}
