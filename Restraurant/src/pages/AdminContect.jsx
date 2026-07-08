import React, { useEffect } from 'react'
import { useState } from 'react'

const AdminContect = () => {
 const [contects, setContects] = useState([]);

 const fetchContacts = async () =>{
    try{
        const res = await fetch("http://localhost:5000/contact");
        const data = await res.json();
        setContects(data);
    }catch (err) {
        console.log(err);
    }
 };

 useEffect(()=>{
    fetchContacts();
 });

  return (
    <div className='container my-5'>
        <h2 className='text-center mb-4'>Contact Message</h2>

        <div className='row'>
            {contacts.map((item) =>{
                <div key={item._id} className='col-md-4 mb-3'>
                    <div className='card p-3 shadow'>
                        <h5>{item.name}</h5>
                        <p><b>Email:</b>{item.email}</p>
                        <p>{item.message}</p>
                    </div>

                </div>
            })}

        </div>
      
    </div>
  )
}

export default AdminContect;
