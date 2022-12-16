import React, { createContext, useContext, useState } from 'react';

const LanguagePreferenceContext = createContext();

function useLanguagePreference() {
  return useContext(LanguagePreferenceContext);
}

function LanguagePreference({ children }) {
  const [spanish, setSpanish] = useState(false);
  const value = {
    spanish,
    setSpanish,
  };

  return (
    <LanguagePreferenceContext.Provider value={value}>
      {children}
    </LanguagePreferenceContext.Provider>
  );
}

export { LanguagePreference, useLanguagePreference };
