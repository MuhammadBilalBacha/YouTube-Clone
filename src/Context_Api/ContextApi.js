import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../Fetch_Api/api";

export const YoutubeContext = createContext();

const ContextProvider = (props) => {
  const [result, setResult] = useState([]);
  const [category, setCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    fetchApi(category);
  }, [result, category]);
  const fetchCategory = (query) => {
    fetchApi(`search/?q=${query}`).then((res) => {
      return setResult(res.data);
    });
    setLoad(false);
  };
  useEffect(() => {
    fetchCategory(category);

    if (result.length !== 0) {
      return;
    }
  }, [result.length, category]);

  const myCtx = {
    result,
    mobileMenu,
    fetchCategory,
    setCategory,
    setMobileMenu,
    load,
  };

  return (
    <YoutubeContext.Provider value={{ myCtx }}>
      {props.children}
    </YoutubeContext.Provider>
  );
};

export default ContextProvider;
