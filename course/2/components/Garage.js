import Car from "./Car";
import Apple from './Apple';

function Garage(){
    // const carname = "Ford";
    // const carname = "Rolls Royse";
    // const color = 'Black'
    const info = {brand: 'Rolls Royse', color: 'Black'};
    const apple = {name : 'Fuji'}
    // const info = {};
    const isOpen = false;
    const carList = [
      {brand : 'BMW', color: 'White'},
      {brand : 'Audi', color: 'Blue'},
      {brand : 'GT', color: 'Green'},
    ]
    const no = [
      1,2,3,4,5,6,7,8,9
    ]

    return (
      <>
        <h1>Who lives in my garage</h1>
        {/* <Car brand={carname} colorname = {color}/> */}
        { info.brand !== undefined && info.color !== undefined ? <Car info={info}/> : null}
        
        <Apple apple = {apple}/>
        {isOpen ? <h4> Door is opened </h4> : <h4> Door is closed </h4>}
        <ul>
          <li>
            { carList.map( (info) => <li key={info.brand}>  <Car info={info}/> </li> ) }
          </li>
        </ul>
        <ul>
            { no .map( (e,index) => <p key={index}>{e}</p> ) }
        </ul>
      </>
      );
  }

  export default Garage;