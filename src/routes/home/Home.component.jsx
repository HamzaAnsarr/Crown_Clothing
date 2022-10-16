import CategoryContainer from "../../components/category_container/Category_conainer.component";
import { Outlet } from "react-router-dom";
const Home = ()=> { 
  return (
    <>
    <Outlet />
    <CategoryContainer />
    </>
  )
}

export default Home