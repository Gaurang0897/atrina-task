import { useContext } from "react";
import { FormStateContext } from "@/context/FormContext";

export default function Step3() {
  const { setCurrentStep } = useContext(FormStateContext);
  return (
    <div className="flex flex-col">
      <p>
        By clicking <b>Submit </b>
        you agree to the Terms and Condition and sharing your information with
        us. Also you cant change your response later.
      </p>
      <button type="submit" className="" onClick={() => setCurrentStep(4)}>
        Submit
      </button>
    </div>
  );
}
