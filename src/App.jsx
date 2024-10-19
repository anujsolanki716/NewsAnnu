import React from "react";
// import { ReactDOM } from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
// import NewsItems from "./components/NewsItems";

function App() {
  const [category, setCategory] = useState("general");

  return (
    
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      
    </div>
    
  );
}

export default App;
