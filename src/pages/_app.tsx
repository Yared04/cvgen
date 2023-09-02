import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { createContext, useState } from "react";

export const AppContext = createContext({
  state: {
    curUser: { id: "", username: "" },
  },
  setState: (state) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    curUser: { id: "", username: "" },
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      <main className="flex flex-col min-h-screen max-w-screen min-w-[320px] bg-primary-bg">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </AppContext.Provider>
  );
}
