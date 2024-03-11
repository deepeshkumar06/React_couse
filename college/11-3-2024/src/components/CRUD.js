import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CRUD() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/Students')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios.post('http://localhost:3001/Students', { "id": id, "name": name, "age": age })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/Students/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  const [pop,setpop] = useState(false)
  const [id1, setId1] = useState(0);
  const [name1, setName1] = useState('');
  const [age1, setAge1] = useState(0);

  const openpop = (datas) => {
    setpop(true)
    setId1(datas.id)
    setName1(datas.name)
    setAge1(datas.age)
  }
  const handleupdate = () => {
    axios.put(`http://localhost:3001/Students/${id1}`,{"id" : id1 ,"name" : name1 , "age" : age1})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input type='number' value={id} onChange={(e) => setId(e.target.value)} /><br />
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <label>Age</label>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <button type='submit'>Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(x => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>
                <button onClick={ () => openpop(x) }>Update</button>
                <button onClick={() => handleDelete(x.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pop && <form onSubmit={handleupdate}>
        <button onClick={ () => setpop(false) }>X</button>
        <label>Id:</label>
        <input type='number' value={id1} onChange={(e) => setId1(e.target.value)} /><br />
        <label>Name:</label>
        <input type='text' value={name1} onChange={(e) => setName1(e.target.value)} /><br />
        <label>Age</label>
        <input type='number' value={age1} onChange={(e) => setAge1(e.target.value)} /><br />
        <button type='submit'>Submit</button>
        </form>
        }
    </div>
  )
}
