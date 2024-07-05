import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import { Inter } from "next/font/google";
import { useContext, useRef } from "react";
import { FormStateContext } from "../context/FormContext";
import NavBar from "@/components/NavBar";
import Final from "@/components/Final";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentStep } = useContext(FormStateContext);
  const childRef = useRef<any>();

  let Output;

  const checkForm = () => {
    childRef?.current?.triggerForm();
  };

  switch (currentStep) {
    case 1:
      Output = <Step1 ref={childRef} />;
      break;

    case 2:
      Output = <Step2 ref={childRef} />;
      break;

    case 3:
      Output = <Step3 />;
      break;

    case 4:
      Output = <Final />;
      break;

    default:
      Output = null;
      break;
  }

  return (
    <main className={`flex flex-col items-center px-[5%]`}>
      <div className="z-10  w-full items-center justify-between text-sm lg:flex">
        {currentStep != 4 && <NavBar checkForm={checkForm} />}
      </div>
      <div className="w-1/2">{Output}</div>
    </main>
  );
}
