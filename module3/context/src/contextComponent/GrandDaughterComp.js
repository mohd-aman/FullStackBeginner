import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"


export default function GrandDaughterComp(){
    const info = useContext(FamilyContext);
    return(
        <div className="grandDaughter">
            {info.onlyForGrandChildren()}
        </div>
    )
}