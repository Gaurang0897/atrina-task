import { useForm } from "react-hook-form";
import ErrorComponent from "./common/ErrorComponent";
import { useContext, useEffect, useImperativeHandle } from "react";
import { FormStateContext } from "@/context/FormContext";
import React from "react";

type FormFields = {
  firstName: string;
  lastName: string;
  contact: string;
};

const Step1 = React.forwardRef(({ ...props }, ref) => {
  const { form, setForm, currentStep, setCurrentStep, setStep1 } =
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
      firstName: form.firstName,
      lastName: form.lastName,
      contact: form.contact,
    },
  });

  useEffect(() => {
    setStep1(isValid);
  }, [isValid, setStep1]);

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
      <label htmlFor="fName">First Name:</label>
      <ErrorComponent msg={errors.firstName?.message} />
      <input
        id="fName"
        type="text"
        {...register("firstName", {
          required: "First name is required.",
        })}
        placeholder="enter you first name...."
      />

      <label htmlFor="lName">Last Name:</label>
      <ErrorComponent msg={errors.lastName?.message} />
      <input
        id="lName"
        type="text"
        {...register("lastName", {
          required: "Last name is required.",
        })}
        placeholder="enter you first name...."
      />

      <label htmlFor="contact">Contact number:</label>
      <ErrorComponent msg={errors.contact?.message} />
      <input
        id="contact"
        type="number"
        {...register("contact", {
          required: "Contact is required.",
        })}
        placeholder="enter you contact...."
      />

      <button type="submit">Save & Proceed</button>
    </form>
  );
});
Step1.displayName = "Step1";
export default Step1;
