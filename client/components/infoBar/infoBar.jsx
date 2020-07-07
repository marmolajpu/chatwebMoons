import react from 'react';
import styles from './infoBar.module.scss'

const InfoBar = ({room}) => ( 
    <>
    <div className={`${styles.infoBar}`}>
        <div className={`${styles.leftInnerContainer }`}>
            <img className={`${styles.onlineIcon }`} src="/onlineIcon.png" alt="En linea"/>
            <h3>{room}</h3>
        </div>
        <div className={`${styles.rightInnerContainer }`}>
            <a href="/"><img src="/closeIcon.png" alt="cerrar"/></a>
        </div>
    </div>
    </> 
)

export default InfoBar
