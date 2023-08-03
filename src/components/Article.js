import React from 'react';
import ArticleItem from './ArticleItem';
                                                                                                                                                                                                                                                                                                                                                                                                                 
const Articles = ({ articles }) => {
  return (
    <div className='articles'>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
