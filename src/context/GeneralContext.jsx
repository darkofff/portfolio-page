import { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

function GeneralProvider({ children }) {
  const [currentProject, setCurrentProject] = useState("welcome");
  const [lang, setLang] = useState("pl");
  return (
    <GeneralContext.Provider
      value={{ currentProject, setCurrentProject, lang, setLang }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

function useGeneral() {
  const context = useContext(GeneralContext);
  if (!context) throw new Error("something wrong");
  return context;
}

export { GeneralProvider, useGeneral };
