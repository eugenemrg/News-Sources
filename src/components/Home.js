import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from "./Article";
import Search from "./Search";

const API_KEY = "607db713f627456d9d081ee0331ce09d";

const Home = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
      if (category) {
        url = `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${API_KEY}`;
      }

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setArticles(data.articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    };

    fetchArticles();
  }, [category]);

  const handleSearch = (searchTerm) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  return (
    <div>
      <h1>Latest News</h1>
      <Search handleSearch={handleSearch} />
      <Article articles={articles} />
    </div>
  );
}

export default Home;
