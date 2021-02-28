import React, { useEffect, useState } from "react";

import Card from "../movie-card";

const url = 'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json';

const initialState = {
    movies: [],
    randomMovie: {},
}

const MovieList = (props) => {

const [state, setState] = useState(initialState);
  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setState({
        ...state,
        movies: data.movies
    }))
  }

  const clikedMovie = (e) => {
    const movie = state.movies.find(el => el.id == e.target.id);
    setState({
        ...state,
        randomMovie: movie
    })

    props.history.push({
        pathname: '/something',
        state: {
          randomMovie: movie
        }
      })
  }

  const renderItems = () => (
      state.movies.map(elem => <Card onClick={clikedMovie} key={elem.id} id={elem.id} title={elem.title} posterUrl={elem.posterUrl}/>)
  )

  return (
      <div>
          {
            state.movies && renderItems()
          }
      </div>
  )
};

export default MovieList;
