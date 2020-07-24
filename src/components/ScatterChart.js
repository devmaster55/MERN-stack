import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ScatterChart extends Component {
	render() {
    	const data = this.props.data;

		const options = {
			theme: "dark2",
			animationEnabled: true,
			zoomEnabled: true,
			title:{
				text: "Credit vs Balance"
			},
			axisX: {
				title:"Balance",
				// suffix: "",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY:{
				title: "Credit",
				includeZero: false,
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			data: [{
				type: "scatter",
				markerSize: 15,
				toolTipContent: "<h5>{name}<h5/><b>Balance: </b>{x}<br/><b>Credit: </b>{y}",
        dataPoints: data
			}]
		}
		
		return (
		<div>
			<h1>Scatter Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ScatterChart;