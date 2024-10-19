// import NewsBoard from "./NewsBoard"
// import { ReactDOM } from "react";
import React from "react";
import image from '../assets/news.jpg'
 

const NewsItems = ({title, discription, src, url}) => {
 
  return (
    
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0.50)}</h5>
          <p className="card-text">
            {discription? discription.slice(0,90):"Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported."}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    
  );
};

export default NewsItems;
