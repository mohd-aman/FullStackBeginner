import { useState,useEffect } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import WatchList from './Components/WatchList';


function App() {
  let [watchList,setWatchList] = useState([]);
  
  let [pageNo,setPageNo] = useState(1);

    let handleNext = ()=>{
        setPageNo(pageNo+1);
    }
    
    let handlePrev = ()=>{
        if(pageNo>1)
            setPageNo(pageNo-1);
    }


  useEffect(()=>{
    let favMoviesFromLocalStorage = JSON.parse(localStorage.getItem("movies-app"));
    if(favMoviesFromLocalStorage == null){
        return;
    }
    setWatchList(favMoviesFromLocalStorage);
  },[])

  let handleAddToWatchList = (movieObj)=>{
    // let newWatchList = [...watchList];
    // newWatchList.push(id);
    // console.log(newWatchList);
    // setWatchList(newWatchList);
    //same thing in one line
    let newWatchList = [...watchList,movieObj];
    localStorage.setItem("movies-app",JSON.stringify(newWatchList));
    setWatchList(newWatchList)
}

let handleRemoveFromWatchList = (movieObj)=>{
    let newWatchList = watchList.filter((movie)=>{
        return movie.id!=movieObj.id;
    })
    localStorage.setItem("movies-app",JSON.stringify(newWatchList));
    setWatchList(newWatchList);
}

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <><Banner/>
          <Movies watchList={watchList}
                  setWatchList={setWatchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  pageNo={pageNo}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
          /></>
        } ></Route>

        <Route path='/watchlist' element={
        <WatchList watchList={watchList}
                  setWatchList={setWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
        />}></Route>
      </Routes>
    </BrowserRouter>
      
    
    
  );
}

export default App;
