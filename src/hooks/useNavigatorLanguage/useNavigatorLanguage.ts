import React from "react";

function useNavigatorLanguage() {
  const [language, setLanguage] = React.useState<string>();
  
  React.useEffect(() => {
    setLanguage(navigator.language);
  }, []);

  return language;
}

export { useNavigatorLanguage }