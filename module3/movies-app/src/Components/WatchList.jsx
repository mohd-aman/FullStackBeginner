import genreids from "../Utility/genre";

export default function WatchList(props) {

    let {watchList, handleRemoveFromWatchList} = props
    
    return (
        <>
            <div className=" flex justify-center">
                <div className="h-[3rem] w-[15rem] bg-blue-400
                 rounded-xl text-white flex justify-center items-center 
                 font-bold ">All Genres</div>
            </div>

            <div className="flex justify-center my-4">
                <input className="h-[3rem] w-[18rem] bg-gray-200
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
                                <div className="p-2"><i className="fa-solid fa-up-long"></i></div>
                                <div className="p-2"> Ratings</div>
                                <div className="p-2"><i className="fa-solid fa-down-long"></i></div></th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th className=" text-red-500">Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {watchList.map((movieObj) => {
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