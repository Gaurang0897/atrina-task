import { useForm } from "react-hook-form";
import ErrorComponent from "./common/ErrorComponent";
import { useContext, useEffect, useImperativeHandle } from "react";
import { FormStateContext } from "@/context/FormContext";
import React from "react";

type FormFields = {
  email: string;
  nationality: string;
  gender: string;
};

const Step2 = React.forwardRef(({ ...props }, ref) => {
  const { form, setForm, currentStep, setCurrentStep, setStep2 } =
    useContext(FormStateContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm<FormFields>({
    mode: "onChange",
    defaultValues: {
      email: form.email,
      nationality: form.nationality,
      gender: form.gender,
    },
  });

  useEffect(() => {
    setStep2(isValid);
  }, [isValid, setStep2]);

  useImperativeHandle(ref, () => ({
    triggerForm,
  }));

  const triggerForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    trigger();
    await handleSubmit(submitData)(e);
  };

  const submitData = (data: FormFields) => {
    setForm({ ...form, ...data });
  };

  const onSubmit = (data: FormFields) => {
    setForm({ ...form, ...data });
    setCurrentStep(currentStep + 1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <label htmlFor="fName">Email:</label>
      <ErrorComponent msg={errors.email?.message} />
      <input
        id="fName"
        type="text"
        {...register("email", {
          required: "Email adress is required.",
        })}
        placeholder="enter you first name...."
      />

      <label htmlFor="lName">Nationality:</label>
      <ErrorComponent msg={errors.nationality?.message} />
      <input
        id="lName"
        type="text"
        {...register("nationality", {
          required: "Nationality is required.",
        })}
        placeholder="enter you first name...."
      />

      <label htmlFor="contact">Gender:</label>
      <ErrorComponent msg={errors.gender?.message} />
      <select
        {...register("gender", {
          required: "Please select 1 option.",
        })}
      >
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
      </select>

      <button type="submit">Save & Proceed</button>
    </form>
  );
});
Step2.displayName = "Step2";
export default Step2;
