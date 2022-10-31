import Home from "./routes/home/Home.component";
import {Routes , Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
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
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
