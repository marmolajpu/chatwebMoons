import React, {useState, useEffect}from "react";
import { useRouter }  from 'next/router';
import io from 'socket.io-client'
import InfoBar from '../infoBar/infoBar.jsx'
import Input from '../input/input.jsx'
import Messages from '../messages/messages.jsx'

import styles from './chat.module.scss'

let socket;

function Chat({location}) {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = '192.168.0.5:5000'
  const router = useRouter();

  useEffect(() => {
    console.log(router)
    const {name, room} = router.query
  
    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)

    socket.emit('join', {name, room}, (error) => {
      if(error === 1) {
        window.location.href = '/'
      }
    })


  },[ENDPOINT, router.query])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ])
    })
  }, [])

    const sendMessage = (e) => {
      e.preventDefault()
      if(message){
        socket.emit('sendMessage', message, () => setMessage(''))
      }
    }

    return (
      <>
        <div className={styles.outerContainer}>
          <div className={styles.container}>
          <InfoBar room={room} />
          <Messages messages={messages} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
          </div>
        </div>
      </>
    );
}
  
export default Chat;