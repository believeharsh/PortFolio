import { useEffect } from "react";

const useOutSideClick = (ref, hanlder) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        hanlder();
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, hanlder]);
};

export default useOutSideClick;
