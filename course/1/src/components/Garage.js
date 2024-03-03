import Car from "./Car";
import Apple from './Apple';

function Garage(){
    // const carname = "Ford";
    // const carname = "Rolls Royse";
    // const color = 'Black'
    const info = {brand: 'Rolls Royse', color: 'Black'};

    return (
      <>
        <h1>Who lives in my garage</h1>
        {/* <Car brand={carname} colorname = {color}/> */}
        <Car info={info}/>
        <Apple />
      </>
      );
  }

  export default Garage;