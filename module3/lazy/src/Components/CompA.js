import HOC from "./HOC"


function CompA(props){
    console.log(props);
    return(
        <div style={props.style}>
            Hello
        </div>
    )
}

export default HOC(CompA);