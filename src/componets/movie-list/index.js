import React, { useEffect, useState } from "react";

import Card from "../movie-card";

const url = 'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'

const MovieList = () => {

const [state, setState] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setState(data))
  }

  const renderItems = () => (
      state.movies.map(elem => <Card key={elem.id} id={elem.id} title={elem.title} posterUrl={elem.posterUrl}/>)
  )

  return (
      <div>
          {
            state && renderItems()
          }
      </div>
  )
};

export default MovieList;
