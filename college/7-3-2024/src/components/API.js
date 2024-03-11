import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function API() {
    const [post,setpost] = useState([]);
    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            setpost(res.data)
        })
        .catch(err => {console.log(err)});
    },[] )
  return (
    <div>
        <table border={"2px"}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {post.map( x => (
                    <tr key={x.id}>
                        <td>{x.userId}</td>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                    </tr>
                ) )}
            </tbody>
        </table>
    </div>
  );
}
