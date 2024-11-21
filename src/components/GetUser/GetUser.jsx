import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShowUser from '../ShowUser/ShowUser';
function GetUser() {
const [users,setUsers]=useState([]);

const getRandomUser=async ()=>{
    const response= await axios.get('https://randomuser.me/api/?results=10')
    setUsers(response.data.results)
   
    
    
}
useEffect(()=>{
    getRandomUser();
},[])

  return (
    <div>
     {
        users.map((user,index)=>
        <ShowUser key={index} users={user}/>
        )
    }              
    </div>
  )
}

export default GetUser