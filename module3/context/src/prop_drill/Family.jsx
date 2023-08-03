import Parent from "./Parent";


export default function Family(props){
    return(
        <div className="family">
            <h1>{props.info.familyName}</h1>
            <Parent info={props.info}/>
        </div>
    )
}