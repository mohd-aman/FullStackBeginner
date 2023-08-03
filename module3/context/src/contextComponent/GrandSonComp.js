import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandSonComp(){

   const info = useContext(FamilyContext)
    return(
        <div className="grandSon">
            <h4>{info.onlyForGrandChildren()}</h4>
        </div>
    )
}