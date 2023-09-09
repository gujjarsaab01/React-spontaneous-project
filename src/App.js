import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryDropdown from './Component/Category';
import JokeDisplay from './Component/JokeDisplay';

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');
  

  useEffect(() => {
    
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const fetchJoke = (category) => {
    if (!category) return;

    

    
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        setJoke(response.data.value);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      })
      
  };

  return (
    <div >
      <h1 > Jokes</h1>
      <CategoryDropdown categories={categories} onSelectCategory={fetchJoke} />
      
      <JokeDisplay joke={joke} />
    </div>
  );
}

export default App;
