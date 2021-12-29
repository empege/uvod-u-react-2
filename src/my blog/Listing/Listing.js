import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa'
import Article from '../Article/Article'

// Named export import
// import { articles } from '../articlesData';
const url = 'http://localhost:3000/articles';

function Listing() {

  const [articles, setArticles] = useState(null);
  const [search, setSearch] = useState('');

  async function fetchArticles(url) {
    const response = await fetch(url);
    const articlesData = await response.json();
    setArticles(articlesData);
  }

  useEffect(() => {
    fetchArticles(url);
  }, [])

  if (articles) {
    return (
      <section className="o-listing">
        <h1 className='pozdrav__naslov' style={{ textAlign: 'center' }}>My Blog</h1>
        <div className="m-article" style={{ width: 'fit-content', margin: '20px auto', textAlign: 'left' }}>
          <label htmlFor="search">Search articles:</label>
          <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
        </div>
        <section>
          {
            articles && articles
              .filter((current) => {
                const currentTitle = current.title.toUpperCase();
                if (currentTitle.includes(search.toUpperCase())) return current;
                return false;
              })
              .map((current, index) => {
                return <Article key={current.id} {...current} />
              })
          }
        </section>
      </section>
    )
  }
  return <h1 className='spinner'><FaSpinner /><br />LOADING</h1>
}

export default Listing;