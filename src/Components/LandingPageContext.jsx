import { useState, createContext,  } from "react";

const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <LandingPageContext.Provider value={{ menu, setMenu }}>
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
