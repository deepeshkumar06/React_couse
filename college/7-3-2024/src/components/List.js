import React, { useState } from 'react'

export default function List() {
   const [List,setList] = useState([{
    id : 1,
    name : "john"
   },
   {
    id : 2,
    name : "Wig"
   }
]);
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {List.map(x => (
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
