
import './App.css';
import FamilyComp from './contextComponent/FamilyComp';
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
    onlyeForGrandChildren:()=>{
      return "Info for GrandChild"
    }
  }

  return (
    // <Family info={familyInfo}/>
    <FamilyComp/>
  );
}

export default App;
