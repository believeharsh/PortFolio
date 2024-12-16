import { useEffect, useState } from "react";

const useLightDark = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error.message);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  console.log(value); 

  return [value, setValue];
};
export default  useLightDark ; 