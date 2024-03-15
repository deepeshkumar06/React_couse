import React, { useState } from 'react'

export default function FormTable() {
  
    const [formdata,setformdata] = useState([]);
    const [object,setobject] = useState({
        id : 0,
        name : ""
    });
    function handlechange(e){
        setobject({...object,[e.target.name] : e.target.value});
    }
    function handleclick(e){
        setformdata([...formdata,object]);
        console.log(formdata);
        e.preventDefault();
    }
    return (
    <div>
        <form action="" onSubmit={handleclick}>
            <label htmlFor="" >ID : </label>
            <input type="text" name='id' value={formdata.id} onChange={handlechange}/><br />
            <label htmlFor="">Name :</label>
            <input type="text" name='name' value={formdata.name} onChange={handlechange}/><br /><br />
            <button type='submit' >Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {formdata.map(x => (
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
