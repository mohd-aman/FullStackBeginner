
export default function MoiveCard(props){
    // console.log(props);
    return(
        <div className="my-3 hover:scale-110 
        duration-300 overflow-hidden rounded-2xl
         h-[40vh] w-[200px] bg-cover bg-center 
         flex flex-col justify-between items-end"
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${props.poster_path})`}}
        >
            
            {props.watchList.includes(props.id)?

            <div onClick={()=>props.handleRemoveFromWatchList(props.id)} className="m-4 bg-stone-900
            h-8 w-8 flex items-center
            justify-center rounded-lg
            hover:cursor-pointer"> &#10060;</div>:

            <div onClick={()=>props.handleAddToWatchList(props.id)} className="m-4 bg-stone-900
            h-8 w-8 flex items-center
            justify-center rounded-lg
            hover:cursor-pointer"> &#128525;</div>
            
            }
            
            
            <div className=" bg-stone-900/60 w-full text-center p-4 text-2xl text-white">
                {props.title}
            </div>
        </div>
    )
}