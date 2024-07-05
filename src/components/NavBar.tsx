import { FormStateContext } from "@/context/FormContext";
import { Fragment, useContext } from "react";

type Props = {
  checkForm: () => void;
};

export default function NavBar(props: Props) {
  const { checkForm } = props;
  const { currentStep, setCurrentStep, step1, step2 } =
    useContext(FormStateContext);

  const handleNavigation = (value: number) => {
    checkForm();
    let current = "step" + currentStep;
    if (step1 && "step1" == current && value != 3) return setCurrentStep(value);
    if (step2 && "step2" == current && value != 3) return setCurrentStep(value);
    if (step1 && step2) return setCurrentStep(value);
  };

  const setClass = (value: number) => {
    let classValue = "navBtn";

    if (value == currentStep) {
      classValue = classValue + " active";
    }
    return classValue;
  };
  return (
    <div className="flex w-full items-center py-10">
      {[1, 2, 3].map((e) => {
        return (
          <Fragment key={e}>
            <div className="line"></div>
            <span className={setClass(e)} onClick={() => handleNavigation(e)}>
              {e}
            </span>
            <div className="line"></div>
          </Fragment>
        );
      })}
    </div>
  );
}
