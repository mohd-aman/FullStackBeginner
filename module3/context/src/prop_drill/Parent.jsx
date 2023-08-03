import Child from "./Child";

export default function Parent(props){
    return(
        <div className="parent">
            <h1>{props.info.onlyForParents()}</h1>
            <Child info={props.info}/>
        </div>
    )
}