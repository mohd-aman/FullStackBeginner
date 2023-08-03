
import './App.css';
import FamilyComp from './contextComponent/FamilyComp';
import { FamilyContext } from './contextComponent/FamilyContext';
import Family from './prop_drill/Family';

function App() {

  const familyInfo = {
    familyName : "The Griffins",
    onlyForParents:()=>{
      return "Info for parents"
    },
    onlyForChild:()=>{
      return "Info for Child"
    },
    onlyForGrandChildren:()=>{
      return "Info for GrandChild"
    },
    
  }

  return (
    // <Family info={familyInfo}/>
    <FamilyContext.Provider value={familyInfo}>
        <FamilyComp/>
    </FamilyContext.Provider>
   
  );
}

export default App;
