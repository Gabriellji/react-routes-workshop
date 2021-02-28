import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './componets/home';
import Movie from './componets/clicked-movie';
import MovieList from './componets/movie-list';
import Navbar from './componets/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props}/>}/>
        <Route path="/list" render={(props) => <MovieList {...props}/>}/>
        <Route path="/something" render={(props) => <Movie {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
