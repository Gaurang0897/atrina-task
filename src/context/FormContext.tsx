import { createContext, PropsWithChildren, useState } from "react";

const FORM_STATE = {
  currentStep: 1,
  step1: false,
  step2: false,
  values: {},
};

export const FormStateContext = createContext<any>(FORM_STATE);

export function FormStateContextProvider(props: PropsWithChildren<any>) {
  const { children } = props;

  const [currentStep, setCurrentStep] = useState(FORM_STATE.currentStep);
  const [form, setForm] = useState(FORM_STATE.values);
  const [step1, setStep1] = useState(FORM_STATE.step1);
  const [step2, setStep2] = useState(FORM_STATE.step2);

  const value = {
    currentStep,
    setCurrentStep,
    form,
    setForm,
    step1,
    setStep1,
    step2,
    setStep2,
  };
  return (
    <FormStateContext.Provider value={value}>
      {children}
    </FormStateContext.Provider>
  );
}
