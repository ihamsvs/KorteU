import Data from "./components/Data";
import MainInfo from "./components/MainInfo";
import Navbar from "./components/Navbar";
import Buscar from "./components/Buscar";

export default function Home(){
  return(
    <div className="min-h-screen min-w-full">
      <Navbar/>
      <MainInfo/>
      <Data/>
      <Buscar/>
    </div>
  )
}