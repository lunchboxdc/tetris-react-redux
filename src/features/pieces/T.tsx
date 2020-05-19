import React from 'react'
import { useDispatch } from 'react-redux'

export default function T(): JSX.Element {
	// const dispatch = useDispatch();
	const [horizontalPosition, setHorizontalPosition] = React.useState(0);
	const [verticalPosition, setVerticalPosition] = React.useState(0);
	const [rotation, setRotation] = React.useState(0);

	document.onkeydown = handleKeyPress;

	function handleKeyPress(e) {
		if (e.keyCode == '40') {
			if (verticalPosition + 100 <= 1000) {
				setVerticalPosition(verticalPosition + 100)
			}
		}
		else if (e.keyCode == '37') {
			if (horizontalPosition - 100 >= 0) {
				setHorizontalPosition(horizontalPosition - 100)
			}
		}
		else if (e.keyCode == '39') {
			if (horizontalPosition + 100 <= 1000) {
				setHorizontalPosition(horizontalPosition + 100)
			}
		}
		else if (e.keyCode == '70') {
			if (rotation === 270) {
				setRotation(0);
			} else {
				setRotation(rotation + 90);
			}
		}
	}

	return (
		<svg viewBox="0 0 300 200" height="200" transform={`translate(${horizontalPosition},${verticalPosition}) rotate(${rotation} 100 100)`}>
			<polygon points="100,0 200,0 200,100 300,100 300,200 0,200 0,100 100,100" fill="blue" stroke="black"/>
		</svg>
	)
}