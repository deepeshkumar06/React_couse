import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import DtI from './components/DtI';
import Calculator from './components/Calculator';
import List from './components/List';
import FormTable from './components/FormTable';
import Condition from './components/Condition';
import Methodpros from './components/Methodpros';
import Useeffect from './components/Useeffect';
import Counter from './components/Counter';
import StopWatch from './components/StopWatch';
import API from './components/API';
import React from 'react';
import Usecontext from './components/Usecontext';
import CRUD from './components/CRUD';


export const Login = React.createContext();
function App() {
  function handle(name){
    console.log(`${name} Button is clicked`);
  }

  return (
    // <Form />
    // <DtI />
    // <Calculator />
    // <List />
    // <FormTable />
    // <Condition />
    // <Methodpros handleclicked = {handle}/>
    // <Useeffect />
    // <Counter />
    // <StopWatch />
    // <API />
    // <Login.Provider value={'Hi'}>
    //   <Usecontext />
    // </Login.Provider>
    <CRUD />
    );
}

export default App;
