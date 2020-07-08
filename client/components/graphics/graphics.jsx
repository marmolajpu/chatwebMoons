import react from 'react'
import { ResponsivePie } from '@nivo/pie'
import styles from './graphic.module.scss'

const Graphic = ({data, colors}) => {
		const format = v => `${v}%`
		const getColor = color => colors[color.id]
		
    return(
        <div className={styles.ContainerGraph}>
          <ResponsivePie
						data={data}
						labelFormat={format}
						tooltipFormat={format}
						margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
						innerRadius={0.90}
						startAngle={0}
						endAngle={-360}
						padAngle={0}
						cornerRadius={0}
						colors={getColor}
						borderWidth={1}
						borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
						enableRadialLabels={false}
						enableSlicesLabels={false}
						animate={true}
						motionStiffness={90}
						motionDamping={15}
						legends={[
							{
								anchor: 'bottom',
								direction: 'row',
								translateY: 56,
								itemWidth: 100,
								itemHeight: 20,
								itemDirection: "left-to-right",
								itemTextColor: "#4f6f19",
								itemsSpacing: 15,
								symbolSize: 20,
								symbolShape: 'circle',
								fontSize: "19px",
								effects: [
									{
											on: 'hover',
											style: {
													itemTextColor: '#000'
											}
									}
								]
							}
						]}
		  		/>
        </div>
    )
}

export default Graphic