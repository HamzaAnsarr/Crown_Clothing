import Home from "./routes/home/Home.component";
import {Routes , Route} from "react-router-dom"
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./components/Shop/Shop_Data.component";
import CheckOutPage from "./routes/checkout/checkout.component";

const App = ()=> {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>} >
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CheckOutPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
