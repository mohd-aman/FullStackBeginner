import GrandDaughterComp from "./GrandDaughterComp";
import GrandSonComp from "./GrandSonComp";


export default function ChildComp(){
    return(
        <div className="child">
            <GrandDaughterComp/>
            <GrandSonComp/>
        </div>
    )
}