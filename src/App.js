import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import "./App.css";

const API_KEY="607db713f627456d9d081ee0331ce09d"

function App() {
  const [articles,setArticles] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  fetchArticles();
}, [])

const fetchArticles= () =>{
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  .then((res)=> {
    return res.json()
  })
  .then((data)=>{
    console.log(data)
    setLoading(false)
  .catch((error)=>{
    console.log("error in fetching the articles", error)
  })
  })

function handleSearch(searchTerm) {
      fetchArticles(searchTerm)
}

}
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <switch>
          <Route exact path="/">
            {loading?(
              <p>loading...</p>
            ):(
              <Articles articles={articles} />
            )}
          </Route>
        </switch>
        <Search handleSearch={handleSearch}/>
      </div>
    </Router>
  );
}

export default App;
