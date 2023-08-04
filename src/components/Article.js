import React from 'react';
import ArticleItem from './ArticleItem';
                                                                                                                                                                                                                                                                                                                                                                                                                 
const Articles = ({ articles }) => {
  return (
    <div className='articles'>
      {articles.map((article, index) => (
        <ArticleItem key={ index } article={article} />
      ))}
    </div>
  );
};

export default Articles;
