import react from 'react'
import Graphic from '../../components/graphics/graphics.jsx'
import styles from '../../components/graphics/graphic.module.scss'
import dataRevenue from '../../data/firstGraphic'
import dataImpressions from '../../data/secondGraphic'
import dataVisits from '../../data/thirdGraphic'

const D3Page = () => {
	return( 
    <>
        <div className={styles.containerGraphics}>
					<Graphic data={dataRevenue[0]} colors={dataRevenue[1]}/>
					<Graphic data={dataImpressions[0]} colors={dataImpressions[1]}/>
					<Graphic data={dataVisits[0]} colors={dataVisits[1]}/>
        </div>
    </>
	)
}


export default D3Page
