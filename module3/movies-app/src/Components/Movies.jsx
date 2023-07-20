
export default function Movies(){
    return(
        <div className="m-4">
            <div className=" m-4 text-2xl font-bold text-center">Trending Movies</div>

            <div className="flex flex-wrap gap-4 justify-around">
                <div className=" hover:scale-110 duration-300 overflow-hidden rounded-2xl h-[40vh] w-[200px] bg-cover bg-center flex items-end "
                style={{backgroundImage:`url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`}}
                >
                <div className=" bg-stone-900/60 w-full text-center p-4 text-2xl text-white">
                    John Wick
                </div>
                </div>
                
            </div>

            <div className="flex justify-center m-4 bg-gray-500 text-white">
                <div className=" mx-2 p-2 hover:cursor-pointer">prev</div>
                <div className="mx-2 p-2 hover:cursor-pointer">1</div>
                <div className="mx-2 p-2 hover:cursor-pointer">next</div>
            </div>
        </div>
    )
}