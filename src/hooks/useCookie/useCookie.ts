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
      // Get from cookie by key
      const value = getCookieValue(key)
      // Parse stored json or if none return initialValue

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const updateCookie = (value: any) => {
    // Allow value to be a function so we have same API as useState
    const valueToStore = value instanceof Function ? value(cookie) : value;

    setCookie(valueToStore)

    document.cookie = `${key}=${JSON.stringify(valueToStore)};`;
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
