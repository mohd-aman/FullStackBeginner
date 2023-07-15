import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import MyComponent from './Components/MyComponent';
import Counter from './Components/Counter';

export default function App() {
  return (
    // <div>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    // </div>
    
    <>
      <Header/>
      <Header/>
      <Header/>
      <Counter/>
      <UserProfile name="Alex" age="30" occupation="Instructor"/>
      <UserProfile name="Aman" age="40" occupation="Instructor"/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <UserProfile name="Stokes" age="30" occupation="Cricketer"/>
      <UserProfile name="Siba" age="No idea" occupation="Developer"/>
      <Counter/>
      <Counter/>
      <Counter/>

      <MyComponent/>

      <Footer/>
    </>
  );
}


//named export
// export function AnotherApp(){
//   return(
//     <div>Another App</div>
//   )
// }

// export const a = 10;
