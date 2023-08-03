import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";


export default function Child(props){
    return(
        <div className="child">
            <h3>{props.info.onlyForChild()}</h3>
            <GrandSon info={props.info}/>
            <GrandDaughter info={props.info}/>
        </div>
    )
}