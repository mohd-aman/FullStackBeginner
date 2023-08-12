import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HOC from "./Components/CompA"
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
// import About from './Pages/About';
import Products from './Pages/Products';
// import Testimonials from './Pages/Testimonials';
// import {moviesData} from "./data.js"

// const Home = lazy(()=>import("./Pages/Home"));
const About = lazy(()=>import("./Pages/About"));
const Testimonials = lazy(()=>import('./Pages/Testimonials'))
// const Products = lazy(()=>import("./Pages/Products"))

function App() {
  // let [movies,setMovies] = useState([])
  // let handleClick = ()=>{
  //   import("./data").then((module)=>{ //dynamic import
  //     console.log(module);
  //     setMovies(module.moviesData);
  //   })
  // }

  return (
  //  <div>
  //    <h2>Movies</h2>
  //    <button onClick={handleClick}>Show Movies</button>
  //     {movies.map((item)=>{
  //       return <div>{item.name}</div>
  //     })}
  //   </div>
  // <>
  //   <Navbar/>
  //   <Home/>
  //   <About/>
  //   <Products/>
  //   <Testimonials/>
  // </>
  // <Suspense fallback={<h2>...Loading</h2>}>
  //   <BrowserRouter>
  //   <Navbar/>
  //   <Routes>
  //     <Route path="/" element={<Home/>}></Route>
  //     <Route path="/about" element={<About/>}></Route>
  //     <Route path='/products' element={<Products/>}></Route>
  //     <Route path='/testimonials' element={<Testimonials/>}></Route>
  //   </Routes>
  // </BrowserRouter>
  // </Suspense>
    
  <>
    <HOC dark/>
    <HOC yellow/>
  </>

  
  

  );
}

export default App;
