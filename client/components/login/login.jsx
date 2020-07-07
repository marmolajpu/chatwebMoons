import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';


function Login() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    return (
      <>
       <div className="Ocontainer">
         <div className="Icontainer">
            <h1 className="titleContainer">Únete</h1>
            <div><input placeholder="Nombre" className="mt-20" type="text" onChange={(e) => setName(e.target.value)} /></div>             
            <div><input placeholder="Sala" value="Grupo: Default"   className="mt-20" type="text" onChange={(e) => setRoom(e.target.value)} /></div>    
            <Link href={{ pathname: '/chat', query: { room: "Chat", name: name} }}>
              <button onClick={(e) => (!name) ? e.preventDefault(): null} className="mt-20" type="submit">Ingresa</button>
            </Link>                  
         </div>
       </div>
        
      </>
    );
  }
  
export default Login;