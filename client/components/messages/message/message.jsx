import react from 'react'
import styles from './message.module.scss'

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase()
    
    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ? (
            <div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
                <p className={`${styles.sentText} ${styles.pr10}`}>{trimmedName}</p>
                <div className={`${styles.messageBox} ${styles.backgroundBlue}`}>
                    <p className={`${styles.messageText} ${styles.colorWhite}`}  >{text}</p>
                </div>
            </div>
        )
        :(
            <div className={`${styles.messageContainer} ${styles.justifyStart}`}>
                <div className={`${styles.messageBox} ${styles.backgroundLight}`}>
                    <p className={`${styles.messageText} ${styles.colorDark}`}  >{text}</p>
                </div>
                <p className={`${styles.sentText} ${styles.pl10}`}>{user}</p>
            </div>
        )
    )
}

export default Message