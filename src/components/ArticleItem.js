import React from 'react'

function ArticleItem({ article }) {

  const { source, author, title, description, url, urlToImage, publishedAt } = article

  return (
    <div className='article-item'>
      <a className='article-item-link' href={url} target='_blank' rel="noreferrer">
        <div className='item-image'>
          <img src={urlToImage ?? "https://placehold.co/320x180?text=News"} alt={title} onError={e => e.target.setAttribute("src", "https://placehold.co/320x180?text=News")} ></img>
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