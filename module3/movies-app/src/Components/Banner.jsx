import axios from "axios"
import { useEffect, useState } from "react";

export default function Banner(){
    let [movieObj,setMovieObj] = useState({});
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2816c138913c6ef73d40c883d36fbe56")
        .then(function(response){
        // console.log(response.data.results);
            let movies = response.data.results;
            let randomMovie = movies[Math.floor(20*Math.random())];
            // console.log(randomMovie);
            setMovieObj(randomMovie);
    })
    },[])

    if(movieObj.poster_path == undefined){
        return <>Loading....</>
    }

    return(
        <div className="h-[70vh] bg-cover bg-center flex items-end "
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`}}
        >
            <div className="bg-stone-900/60 w-full text-center p-4 text-2xl text-white">
                {movieObj.original_title}
            </div>
        </div>
    )
}