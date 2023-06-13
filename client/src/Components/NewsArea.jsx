import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Context } from "../App";

import LeftBar from "./LeftBar";
import Loader from "./Loader";

const NewsArea = () => {
  const { category, leftBar } = useContext(Context);

  const { data, refetch, isFetching } = useQuery(["News"], async () => {
    return axios
      .get(`https://news-server-fgyt.onrender.com/news/${category}`)
      .then((res) => res.data);
  });

  useEffect(() => {
    refetch();
    console.log(data);
    // eslint-disable-next-line
  }, [category]);

  return (
    <div className="flex flex-row">
      <div className="sticky top-0 overflow-y-visible h-full">
        {leftBar && <LeftBar />}
      </div>

      <div
        className={`w-[100%] h-[100%] grid items-center justify-center ${
          leftBar
            ? "md:grid-cols-1 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {isFetching && <Loader />}
        {isFetching && (
          <h1 className="text-4xl font-bold my-6 flex items-center justify-center">
            Loading.....
          </h1>
        )}
        {!isFetching &&
          data.articles.map((item, idx) => {
            return (
              <div key={idx}>
                {" "}
                <NewsCard item={item} />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewsArea;

// const fetchData = () =>{
//     Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef8484e4379f4001b0783d7a2f44326b").then((res)=> console.log(res.data.articles))
// }

// useEffect(()=>{
//     fetchData();
// })
