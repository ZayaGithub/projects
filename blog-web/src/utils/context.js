import { createContext, useState, useEffect } from "react";

export const FirstContext = createContext({ name: "Zaya" });
export const FirstContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState([]);
  const [filteredArray, setfilteredArray] = useState(articles);
  const [count, setCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState();
  const loadMore = () => {
    setCount(count + 3);
    console.log("ajillaa");
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dev.to/api/articles?per_page=200&per_page=${count}`
      );
      const data = await res.json();

      const res1 = await fetch(`https://dev.to/api/articles?page=3`);
      const data1 = await res1.json();

      const res2 = await fetch(`https://dev.to/api/articles?per_page=4`);
      const data2 = await res2.json();

      setfilteredArray(data);
      setArticles(data1);
      setTrending(data2);
      setIsLoading(false);

      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [count]);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((el) =>
      el.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setfilteredArray(filteredArticles);
  };

  const filteredTag = (tagName) => {
    const filteredArticles1 = articles.filter((articles) =>
      articles.tags.split(",")[0].includes(tagName)
    );
    setfilteredArray(filteredArticles1);
  };
  useEffect(() => {
    fetchData();
  }, [count, tag]);

  return (
    <FirstContext.Provider
      value={{
        filteredArray,
        trending,
        articles,
        isLoading,
        handleSearch,
        loadMore,
        filteredTag,
      }}
    >
      {children}
    </FirstContext.Provider>
  );
};
