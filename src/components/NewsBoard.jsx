import { useEffect } from "react";
import { useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log('News items:', NewsItems);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2f593f448b034ef5a10248824a61655c`;
    // let url = `https://newsapi.org/v2/everything?q=IN&from=2024-10-10&to=2024-10-17&sortBy=popularity${category}&apiKey=2f593f448b034ef5a10248824a61655c`;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category${category}&apiKey=2f593f448b034ef5a10248824a61655c`;
    // let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f593f448b034ef5a10248824a61655c`;
      
  
    fetch(url).then((response) => response.json()) .then((data) => setArticles(data.articles));
    },[category]);
//   if (!NewsItems || !Array.isArray(NewsItems)) {
//     return <div>Loading...</div>;
//   }
  
  return (
    
      <div>
        <h2 className="text-center">
          Latest<span className="badge bg-danger">News</span>
        </h2>

        <div>
        {articles.map((news, index) => {
         return <NewsItems key={index} title={news.title} discription={news.description} src={news.urlToImage} url={news.url}/>
        })};
        </div>
      </div>
    
  );
};
export default NewsBoard;
