import React from 'react'

function ArticleItem({ article }) {

  const { source, author, title, description, url, urlToImage, publishedAt } = article

  return (
    <div className='article-item'>
      <a className='article-item-link' href={url} target='_blank'>
        <div className='item-image'>
          <img src={urlToImage} alt={title} ></img>
        </div>
        <div className='item-details'>
          <p className='item-title'>{title}</p>
          <p className='item-description'>{description}</p>
          <p className='item-date'>Published on {publishedAt.split('T')[0]}</p>
          <p className='item-authors'>By {author ?? 'Anonymous'} </p>
        </div>
        <button className='item-button'>Read more on {source.name}</button>
      </a>
    </div>
  )
}

export default ArticleItem