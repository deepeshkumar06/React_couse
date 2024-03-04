
function Car(props){
    // const {brand} = props;
    // const {colorname} = props;
    const {info} = props;
    const {brand , color} = info;

    // const text = `Hi , I am ${info.brand} ${info.color} Color Car`;
    
    const text = `Hi , I am ${brand} ${color} Color Car`;

    return (
      <p>{text}</p>
    );
  }

  export default Car;