import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FormStateContextProvider } from "@/context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormStateContextProvider>
      <Component {...pageProps} />
    </FormStateContextProvider>
  );
}
