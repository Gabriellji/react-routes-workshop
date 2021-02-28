import React, { useEffect, useState } from "react";

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

  return <div></div>;
};

export default MovieList;
