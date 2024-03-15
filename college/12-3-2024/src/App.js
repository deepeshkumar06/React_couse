import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Nav from './components/Nav';
import Product from './components/Product';
import Mostview from './components/Mostview';
import { New } from './components/New';
import Nomatch from './components/Nomatch'
import Order from './components/Order';
import User from './components/User';
import Userdet from './components/Userdet';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service />} />
        <Route path='/product' element={<Product />} > 
            <Route path='mostview' element={<Mostview/>} />
            <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<Nomatch />} />
        <Route path='/order' element={<Order />} />
        <Route path='/user' element={<User/>} >
          <Route path=':userid' element={<Userdet/>} />  
        </Route>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
