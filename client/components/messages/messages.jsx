import react from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './message/message.jsx'
import styles from './messages.module.scss'

const Messages = ({messages, name}) => (
    <ScrollToBottom className={styles.messages}>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>    
)

export default Messages