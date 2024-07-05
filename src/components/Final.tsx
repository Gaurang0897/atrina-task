import { FormStateContext } from "@/context/FormContext";
import { useContext } from "react";

export default function Final() {
  const { form } = useContext(FormStateContext);

  return (
    <div className="m-auto w-fit mt-10">
      <span className="green">
        Your response has been submitted successfully !
      </span>
      <div className="flex flex-col mt-5">
        {Object.keys(form).map((e: string, index: number) => {
          return (
            <div key={index}>
              <span className="mr-3">{e.toUpperCase()}:</span>
              <span>{form[e]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
