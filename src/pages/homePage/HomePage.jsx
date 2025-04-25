import Advantages from "../../widgets/HomePageComponents/advantages/Advantages";
import Belive from "../../widgets/HomePageComponents/belive/Belive";

import HomePageBaner from "../../widgets/HomePageComponents/homePageBaner/HomePageBaner";
import Servrices from "../../widgets/HomePageComponents/services/Servrices";


export const HomePage = () => {
  return (
    <div className="">
      <HomePageBaner/>
      <div
        style={{
          marginTop: '-5vw',
          zIndex: 2,
          position: 'relative' // 👈 это обязательно для zIndex
        }}
      >
        <Advantages />
      </div>
    <Servrices/>
    <Belive/>
    </div>
  );
}