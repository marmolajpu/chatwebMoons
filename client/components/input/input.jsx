import react from 'react';
import styles from './input.module.scss'

const Input = ({message, setMessage, sendMessage}) => ( 
    <>
        <form className={styles.form}>
            <input 
                className={styles.form.input}
                type="text"
                placeholder="Escribe un mensaje"
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} 
            />
        <button className={styles.sendButton} onClick={(e)=> sendMessage(e)}>Enviar</button>
        </form>
    </> 
)

export default Input