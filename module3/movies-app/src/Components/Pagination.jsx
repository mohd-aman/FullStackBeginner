
export default function Pagination(props){
    
    let {pageNo,handleNext,handlePrev} = props
    return(
        <div className="flex justify-center m-4 bg-gray-500 text-white">
                <div onClick={handlePrev} className=" mx-2 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
                <div className="mx-2 p-2 hover:cursor-pointer">{pageNo}</div>
                <div onClick={handleNext} className="mx-2 p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
    )
}