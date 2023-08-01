import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from "./components/Article";
import SearchBar from "./components/SearchBar"



const API_KEY="607db713f627456d9d081ee0331ce09d"
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(useParams())

  
   console.log(category.category)
  useEffect(() => {
  let url= (Object.keys(category).length=== 0) ?
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`:
  `https://newsapi.org/v2/top-headlines/sources?category=${category.category}&apiKey=${API_KEY}`

  fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.log("Error in fetching the articles", error);
  })}, []);



  const handleSearch = (searchTerm) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.log("Error in fetching the articles", error);
      });
  };

  return (
    <div>
      <h1>Latest News</h1>
      <Articles articles={articles} />         
      <Search handleSearch={handleSearch} />
    </div>
  );
}

export default Home;
