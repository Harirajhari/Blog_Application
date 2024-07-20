import React, { useState } from 'react';
import "../style/BodyContent.css";
import data from "../../util/data";
import { NavLink } from 'react-router-dom';

const BodyContent = () => {
  const [articles, setArticles] = useState(data);

  return (
    <div>
      <div className='box_content'>
        {articles.map((article, index) => (
          <div key={index} className='grid-item'>
            <h4 className='artTitle'>{article.title}</h4>
            <img src={article.image} alt={article.title} style={{ width: '100%' }} />
            <p className='overview'>{article.overview}</p>
            <div>
            <NavLink to={`/article/${article.id}`}>
                <button className='artbutton'>See more...</button>
              </NavLink>
            </div>
            <div className='line'>
            </div>
            <div className='autdate'>
            <p className='artAut'>{article.author}</p>
            <p className='artDate'>{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyContent;
