import React, { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import Image from './components/Image';
const App = () => {
  const [query, setQuery] = useState('cat');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=v3-VBDPgTICAzeu4lH_yZmIehU18cJ68jPirmU9aB9U`
    );
    const data = await res.json();
    setImages(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [query]);

  const onSearchSubmit = val => {
    setQuery(val);
  };
  if (isLoading) {
    return <h1 className="center">Loading...</h1>;
  }
  return (
    <div className="container">
      <SearchForm onSearchSubmit={onSearchSubmit} />
      <div className="image-container">
        {images.map(image => {
          return <Image key={image.id} {...image} />;
        })}
      </div>
    </div>
  );
};

export default App;
