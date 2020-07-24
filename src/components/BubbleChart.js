import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class BubbleChart extends Component {
	render() {
        const data = this.props.data
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Sum of balance vs average credit every state",
			fontSize: 26
			},
			axisX: {
				title: "Sum of balance every state",
			logarithmic: true
			},
			axisY: {
				title: "Avg. credit every state"
			},
			data: [{
				type: "bubble",
				indexLabel: "{state}",
				toolTipContent: "<b>{state}</b><br>Sum of balance: {x}<br>Avg. credit: {y}<br>Num of accounts: {z}",
                dataPoints: data
			}]
		}
		
		return (
		<div className="mt-5">
			<h1>State Bubble Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BubbleChart;