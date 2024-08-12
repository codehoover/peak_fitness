"use client";
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
import { useState } from "react";
import {
  DoubleArrowLeftIcon,
  PlusCircledIcon,
  ThickArrowLeftIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

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

export default function Onboarding() {
  const [currentWeight, setCurrentWeight] = useState(0);
  const [goalWeight, setGoalWeight] = useState(0);
  const [metric, setMetric] = useState("lbs");
  const [isActive, setIsActive] = useState(false);
  const [num, setNum] = useState(0);
  const router = useRouter();

  const handlePounds = () => {
    setCurrentWeight((currentWeight * 2.205).toFixed(2));
    setGoalWeight((goalWeight * 2.205).toFixed(2));
    setIsActive(!isActive);
    setMetric("lbs");
  };
  const handleKilo = () => {
    setCurrentWeight((currentWeight / 2.205).toFixed(2));
    setGoalWeight((goalWeight / 2.205).toFixed(2));
    setIsActive(!isActive);
    setMetric("kgs");
  };

  const checkInputForNumbers = (e) => {
    const userInput = e.target.value;
    const onlyDigits = userInput.replace(/^0+|[^\d]/g, "");

    if (userInput !== onlyDigits) e.target.value = onlyDigits;
  };

  const initScreen = (
    <div>
      <section className="text-center text-white w-full">
        <h1 className="font-semibold text-2xl ">
          {" "}
          What is your current weight?{" "}
        </h1>
        <input
          className="flex flex-row bg-transparent text-center text-5xl outline-none w-full"
          value={Number(currentWeight)}
          onChange={(e) => setCurrentWeight(e.target.value)}
          onInput={checkInputForNumbers}
        />
      </section>

      <section className="flex flex-row justify-center w-full p-2">
        <button
          className={`flex items-center justify-center bg-black text-white p-2 rounded-l-lg w-28 ${
            isActive ? "" : "bg-orange-500 font-bold duration-300"
          }`}
          onClick={() => handlePounds()}
          disabled={!isActive}
        >
          LB
        </button>
        <button
          className={`flex items-center justify-center bg-black text-white p-2 rounded-r-lg w-28 ${
            isActive ? "bg-orange-500 font-bold duration-300" : ""
          }`}
          onClick={() => handleKilo()}
          disabled={isActive}
        >
          KG
        </button>
      </section>
    </div>
  );

  const targetWeight = (
    <div className="text-white w-full p-2">
      <button className="pl-2" onClick={() => setNum(num - 1)}>
        <DoubleArrowLeftIcon width={25} height={25} />
      </button>
      <section className="text-center">
        <h1 className="font-semibold text-2xl"> Do you have a goal weight? </h1>
        <p className="text-xs"> If not you can skip this section </p>
      </section>

      <input
        className="flex flex-row bg-transparent text-center text-5xl outline-none w-full"
        value={Number(goalWeight)}
        onChange={(e) => setGoalWeight(e.target.value)}
        onInput={checkInputForNumbers}
      />
      <section className="flex flex-row justify-center w-full p-2">
        <button
          className={`flex items-center justify-center bg-black text-white p-2 rounded-l-lg w-28 ${
            isActive ? "" : "bg-orange-500 font-bold duration-300"
          }`}
          onClick={() => handlePounds()}
          disabled={!isActive}
        >
          LB
        </button>
        <button
          className={`flex items-center justify-center bg-black text-white p-2 rounded-r-lg w-28 ${
            isActive ? "bg-orange-500 font-bold duration-300" : ""
          }`}
          onClick={() => handleKilo()}
          disabled={isActive}
        >
          KG
        </button>
      </section>
    </div>
  );

  const auditScreen = (
    <div className="text-white w-full p-2">
      <button className="pl-2" onClick={() => setNum(num - 1)}>
        <DoubleArrowLeftIcon width={25} height={25} />
      </button>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mb-2"> My progress </h1>

        <section className="grid grid-cols-3 gap-2">
          <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 rounded-sm text-2xl">
            {currentWeight + metric}
            <p className="text-sm"> Current </p>
          </div>

          <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 rounded-sm text-2xl">
            {goalWeight + metric}
            <p className="text-sm"> Goal </p>
          </div>

          <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 rounded-sm text-2xl">
            {Math.abs(Number(currentWeight - goalWeight)) + metric}
            <p className="text-sm"> Left </p>
          </div>
        </section>
      </div>
    </div>
  );

  const contentDisplay = [initScreen, targetWeight, auditScreen];

  return (
    <div className="flex flex-col gap-10 items-center bg-transparent pt-24 pb-10 w-full transition-h duration-300">
      {contentDisplay[num]}

      {num >= 2 ? (
        <button
          className="p-2 min-w-1/12 rounded-lg bg-black text-white hover:bg-neutral-900 hover:font-semibold duration-300"
          onClick={() => router.push("/dashboard")}
        >
          Looks good!
        </button>
      ) : (
        <button
          className="p-2 min-w-1/12 rounded-lg bg-black text-white hover:bg-neutral-900 hover:font-semibold duration-300"
          onClick={() => setNum(num + 1)}
        >
          Continue
        </button>
      )}
    </div>
  );
}
