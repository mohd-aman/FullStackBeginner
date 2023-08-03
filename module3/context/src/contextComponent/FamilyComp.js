import { useContext } from "react";
import { FamilyContext } from "./FamilyContext";
import ParentComp from "./ParentComp";


export default function FamilyComp(){
    const info = useContext(FamilyContext)
    return(
        <div className="family">
        {info.familyName}
        <ParentComp/>
        </div>
        
    )
}