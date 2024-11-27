import Data from "./components/Data";
import MainInfo from "./components/MainInfo";

import Buscar from "./components/Buscar";

export default function Home(){
  return(
    <div className="min-h-screen min-w-full">
    
      <MainInfo/>
      <Data/>
      <Buscar/>
    </div>
  )
}