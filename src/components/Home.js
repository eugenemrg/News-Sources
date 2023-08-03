import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from "./Article";
import Search from "./Search";

const API_KEY = "607db713f627456d9d081ee0331ce09d";

const Home = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [headerText, setHeaderText] = useState('')

  useEffect(() => {
    const fetchArticles = () => {
      let url = `https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=${API_KEY}`;
      setHeaderText('Latest News')
      if (category && category!=='home') {
        url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${API_KEY}`;
        setHeaderText(`${category} News`)
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
        setHeaderText(`Search News: ${searchTerm}`)
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <div className='news-articles-parent'>
        <h1>{headerText}</h1>
        <Article articles={articles} />
      </div>
    </div>
  );
}

export default Home;