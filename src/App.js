import Home from "./routes/home/Home.component";
import {Routes , Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign_in/Sign_in.component";
const App = ()=> {
  
  const Shop = ()=>{
    return(
      <h1>I am The Shop Page</h1>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation/>} >
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
