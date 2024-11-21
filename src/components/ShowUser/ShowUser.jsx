import React from 'react'
import './ShowUser.css'
function ShowUser({users}) {
  return (
    <div>
        <div className="genel-user">
            <div className="picture">
               <img src={users.picture.large} alt="" /> 
            </div>
         <div className="title"> <h1 className='name'>{users.name.first}</h1>
         <h1 className='surname'>{users.name.last}</h1>
         
            </div>
            <div className='email'>
            <h3 className='email'> E-mail
                <span className='email-span'>{users.email}</span>
                </h3>
            </div>
            <div className="location">
                <h3 > {users.location.country} |
                {users.location.city}
                </h3>
            </div>
            
        </div>
        
    </div>
  )
}

export default ShowUser