"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context with an initial default value
const AppContext = createContext({
  token: false,
  setToken: ()=> {},
  tazele: false,
  setTazele: () => {},
  toggle: true,
  setToggle: () => {},
  mobile: true,
  setMobile: () => {},
  smallMobileMenu: true,
  setsmallMobileMenu: () => {},
  cartToggle: true,
  setCart: () => {},
  search: true,
  setSearch: () => {},
  pricing: true,
  setPricing: () => {},
  pricingTwo: true,
  setPricingTwo: () => {},
  pricingThree: true,
  setPricingThree: () => {},
  pricingFour: true,
  setPricingFour: () => {},
  isLightTheme: true,
  setLightTheme: () => {},
  toggleTheme: () => {},
});

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

const Context = ({ children }) => {
  const [token, setToken] = useState(false);
  const [tazele, setTazele] = useState(false);
  const [cartToggle, setCart] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);
  const [pricingFour, setPricingFour] = useState(true);
  const [isLightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    const themeType = localStorage.getItem("histudy-theme");
    if (themeType === "dark") {
      setLightTheme(false);
      document.body.classList.add("active-dark-mode");
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("active-dark-mode");
      localStorage.setItem("histudy-theme", "light");
    } else {
      document.body.classList.add("active-dark-mode");
      localStorage.setItem("histudy-theme", "dark");
    }
  }, [isLightTheme]);

  useEffect(() => {
    if (typeof window !== 'undefined') { 
      const storedToken = sessionStorage.getItem('authToken');
      console.log("context")
      if (storedToken) {
        setToken(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };

  const value = {
    token,
    setToken,
    tazele,
    setTazele,
    toggle,
    setToggle,
    mobile,
    setMobile,
    smallMobileMenu,
    setsmallMobileMenu,
    cartToggle,
    setCart,
    search,
    setSearch,
    pricing,
    setPricing,
    pricingTwo,
    setPricingTwo,
    pricingThree,
    setPricingThree,
    pricingFour,
    setPricingFour,
    isLightTheme,
    setLightTheme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
