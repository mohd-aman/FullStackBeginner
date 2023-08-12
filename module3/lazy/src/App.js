import { useState } from 'react';
import './App.css';
// import {moviesData} from "./data.js"

function App() {
  let [movies,setMovies] = useState([])
  let handleClick = ()=>{
    import("./data").then((module)=>{ //dynamic import
      console.log(module);
      setMovies(module.moviesData);
    })
  }

  return (
   <div>
     <h2>Movies</h2>
     <button onClick={handleClick}>Show Movies</button>
      {movies.map((item)=>{
        return <div>{item.name}</div>
      })}
    </div>
  );
}

export default App;
