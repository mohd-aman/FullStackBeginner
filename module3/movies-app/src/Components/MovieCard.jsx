
export default function MoiveCard(props){
    // console.log(props);
    return(
        <div className="my-3 hover:scale-110 duration-300 overflow-hidden rounded-2xl h-[40vh] w-[200px] bg-cover bg-center flex items-end "
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${props.poster_path})`}}
        >
        <div className=" bg-stone-900/60 w-full text-center p-4 text-2xl text-white">
            {props.title}
        </div>
        </div>
    )
}