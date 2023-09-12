import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { GetMovieById } from "../../apicalls/movies";
import {message} from "antd"
import moment from "moment"
import { useNavigate } from "react-router-dom";
import { GetAllTheatresByMovie } from "../../apicalls/theatres";

export default function TheatresForMovie(){
    const [movie,setMovie] = useState();
    const [date,setDate] = useState(moment().format("YYYY-MM-DD"));
    const params = useParams();
    const navigate = useNavigate();
    const getData = async ()=>{
        const response = await GetMovieById(params.id);
        if(response.success){
            message.success(response.message);
            setMovie(response.data);
        }else{
            message.error(response.message);
        }
    }

    const getTheatres = async ()=>{
        const response = await GetAllTheatresByMovie({
            date,movie:params.id
        })
        if(response.success){
            message.success(response.message)
            console.log(response.data);
        }else{
            message.error(response.message)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getTheatres();
    },[date])

    return (
        <div>

            {
                movie && (
                    <div>
                        {/* movie information */}
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <h1 className="text-2xl uppercase">
                                    {movie.title} ({movie.language})
                                </h1>
                                <h1 className="text-md">Duration : {movie.duration} mins</h1>
                                <h1 className="text-md">
                                    Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
                                </h1>
                                <h1 className="text-md">Genre : {movie.genre}</h1>
                            </div>
                            <div>
                            <h1 className="text-md">Select Date</h1>
                            <input
                                type="date"
                                min={moment().format("YYYY-MM-DD")}
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    navigate(`/movie/${params.id}?date=${e.target.value}`);
                                }}
                            />
                        </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}