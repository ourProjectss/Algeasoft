
import { Belive,Advantages ,Servrices,HomePageBaner} from "../../widgets/index"

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