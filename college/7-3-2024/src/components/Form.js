import React,{useState} from 'react'

export default function Form(){
    const [fromData,setForm] = useState({
        FirstName: '',
        SecondName: '',
    });
    const handleName = (e) => {
        setForm({...fromData,[e.target.name]:e.target.value});
    } 
    const handleSubmit = (e) =>{
        console.log(fromData);
        e.preventDefault();
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">FirstName</label>
                <input type="text" value={fromData.FirstName} onChange={handleName} name='FirstName'/>
                <br />

                <label htmlFor="">SecondName</label>
                <input type="text" value={fromData.SecondName} name='SecondName' onChange={handleName}/>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}