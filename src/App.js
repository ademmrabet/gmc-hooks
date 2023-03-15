import {useState} from 'react'
import './App.css';
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import AddNewMovie from './components/AddNewMovie'
import { movieData } from './Data';


function App() {
  const [movies, setMovies] = useState(movieData)
  const [text, setText] = useState("")
  const [rating, setRating] = useState(0)

  const handleChange = (text) =>{
    setText(text)
  }

  const handleRating = (score) =>{
    setRating(score)
  }

  const handleDelete = (id) =>{
    setMovies(movies.filter(movie => movie.id !== id));
  }

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
      <Filter text={text} handleChange={handleChange} />
      <MovieList data={movies.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        &&el.rating>=rating)} deleteMovie={handleDelete}/>
      <AddNewMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
