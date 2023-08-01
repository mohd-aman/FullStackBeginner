import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export default function Movies(props){
    let {watchList,handleAddToWatchList,handleRemoveFromWatchList,
        pageNo,handleNext,handlePrev} = props
    let [movies,setMovies] = useState(undefined);
    
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
                    return <MovieCard movieObj={movieObj}
                                    key={movieObj.id} 
                                    title={movieObj.title}
                                    poster_path={movieObj.poster_path}
                                    watchList={watchList}
                                    handleAddToWatchList={handleAddToWatchList}
                                    handleRemoveFromWatchList={handleRemoveFromWatchList}/>
                })}
                
            </div>

            <Pagination pageNo={pageNo}
                         handleNext={handleNext} 
                         handlePrev={handlePrev}/>
            
        </div>
    )
}