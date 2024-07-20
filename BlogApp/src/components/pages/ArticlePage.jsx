import React from 'react';
import { useParams } from 'react-router-dom';
import "../style/ArticlePage.css";

const ArticlePage = ({ data }) => {
  let { id } = useParams();
  console.log(data);
  const article = data ? data.find(item => item.id.toString() === id) : null;
  console.log(article);

  return (
    <div className='container'>
      <h1 className='artcileHead'>ArticlePage: {id}</h1>
      <div>
      {article ? (
          <div key={article.id} className='grid-item'>
            <h4 className='artTitle'>{article.title}</h4>
            <img src={article.image} alt={article.title} style={{ width: '50%' }} />
            <p className='overview'>{article.overview}</p>
            <div className='autdate'>
              <p className='artAut'>{article.author}</p>
              <p className='artDate'>{article.date}</p>
            </div>
          </div>
        ) : (
          <p>Article not found</p>
        )}
      </div>
      <div>
      </div>
    </div>
  );
};

export default ArticlePage;
