import './App.css';
import {Header} from './component/Header'
import Props from './Props'

function App() {
  const info = {name:"hi" , age : 20};
  return (
    <>
   <Header />
   <Props per={info}/>
   <h5>Child of props</h5>
   </>
  );
}

export default App;
  