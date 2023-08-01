import { useEffect, useState } from "react";
import genreids from "../Utility/genre";

export default function WatchList(props) {

    let {watchList,setWatchList ,handleRemoveFromWatchList} = props
    let [genreList,setGenreList] = useState(["All Genres"]);
    let [currGenre,setCurrGenre] = useState("All Genres");
    let [search,setSearch] = useState("");

    useEffect(()=>{
        let temp = watchList.map((movieObj)=>{
            return genreids[movieObj.genre_ids[0]];
        })
        temp = new Set(temp);
        setGenreList(["All Genres",...temp]);
    },[watchList])

    let handleFilter = (genre)=>{
        setCurrGenre(genre)
    }

    let handleSearch = (e)=>{
        setSearch(e.target.value);
    }

    let sortIncreasing = ()=>{
        let sorted = watchList.sort((movieA,movieB)=>{
            return movieA.vote_average - movieB.vote_average;
        })
        setWatchList([...sorted]);
    }
    
    let sortDecreasing = ()=>{
        let sorted = watchList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average
        })
        setWatchList([...sorted])
    }
    
    return (
        <>
            <div className=" flex justify-center flex-wrap">
                {genreList.map((genre)=>{
                    return <div onClick={()=>handleFilter(genre)} key={genre} className={currGenre == genre?"m-4 h-[3rem] w-[15rem] bg-blue-400 rounded-xl text-white flex justify-center items-center font-bold ":
                    "m-4 h-[3rem] w-[15rem] bg-gray-400 rounded-xl text-white flex justify-center items-center font-bold hover:cursor-pointer"}>{genre}</div>
                })}
                
            </div>

            <div className="flex justify-center my-4">
                <input onChange={handleSearch} value={search} className="h-[3rem] w-[18rem] bg-gray-200
                 outline-none px-4 text-lg "
                 placeholder="Search Movies"
                type="text" />
            </div>

            <div className="m-7 overflow-hidden rounded-lg border shadow-md	">
                <table className="p-4 w-full text-center">
                    <thead className=" h-[3rem] bg-gray-50 border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className="flex">
                                <div onClick={sortIncreasing} className="p-2"><i className="fa-solid fa-up-long"></i></div>
                                <div className="p-2"> Ratings</div>
                                <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-down-long"></i></div></th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th className=" text-red-500">Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {watchList.filter((movieObj)=>{
                            if(currGenre == "All Genres"){
                                return true;
                            }
                            return genreids[movieObj.genre_ids[0]] == currGenre;
                        })
                        .filter((movieObj)=>{
                            return movieObj.title.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((movieObj) => {
                            return <tr className=" border-b-2">
                                <td className="flex items-center mx-4 py-4"> <img className="h-[6rem] w-[10rem]"
                                    src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path} alt="" />
                                    <div className="mx-4">{movieObj.title}</div>
                                </td>
                                <td >{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{genreids[movieObj.genre_ids[0]]}</td>
                                <td onClick={()=>handleRemoveFromWatchList(movieObj)} className=" text-red-500 "><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </>


    )
}