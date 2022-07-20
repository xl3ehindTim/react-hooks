import { useState } from "react";

const getCookieValue = (key: string) => {
  const allcookies = document.cookie;
  let storedValue = "";
  if (allcookies) {
    const cookieArray = allcookies.split(";");
    cookieArray.filter((element) => {
      const singleCookie = element.split("=");
      if (singleCookie[0].trim() === key) {
        storedValue = singleCookie[1];
      }
      return storedValue;
    });
  }
  return storedValue;
};

function useCookie(key: string, initialvalue: any) {
  const [cookie, setCookie] = useState(() => {
    try {
      const value = getCookieValue(key);
      return value;
    } catch (error) {
      return initialvalue;
    }
  });

  const updateCookie = (newValue: any) => {
    setCookie(newValue);
    document.cookie = `${key}=${newValue};`;
  };

  const removeCookie = () => {
    if (getCookieValue(key)) {
      setCookie("");
      var now = new Date();
      now.setMonth(now.getMonth() - 1);
      document.cookie = `${key}=;expires= ${now.toUTCString()}`;
    }
  };

  return [cookie, updateCookie, removeCookie];
}

export { useCookie }