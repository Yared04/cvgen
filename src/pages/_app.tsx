import "@/styles/globals.css";
import { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";

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
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
