import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export default function Movies(){
    let [movies,setMovies] = useState(undefined);
    let [pageNo,setPageNo] = useState(1);

    let handleNext = ()=>{
        setPageNo(pageNo+1);
    }
    
    let handlePrev = ()=>{
        if(pageNo>1)
            setPageNo(pageNo-1);
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2816c138913c6ef73d40c883d36fbe56&page=${pageNo}`)
        .then(function(response){
            // console.log(response.data.results);
            setMovies(response.data.results);
        })
    },[pageNo])

    if(movies == undefined){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="m-4">
            <div className=" m-4 text-2xl font-bold text-center">Trending Movies</div>

            <div className="flex flex-wrap gap-4 justify-around">
                {movies.map((movieObj)=>{
                    return <MovieCard key={movieObj.id} title={movieObj.title}  poster_path={movieObj.poster_path}/>
                })}
                
            </div>

            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
            
        </div>
    )
}