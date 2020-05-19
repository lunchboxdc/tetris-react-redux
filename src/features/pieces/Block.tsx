import React from 'react'
import { useDispatch } from 'react-redux'
import { BlockProps } from '../../app/App';

export default function Block(props: BlockProps): JSX.Element {

	const left = props.x * 50;
	const top = props.y * 50;

	return (
		<div style={{
			left: `${left}px`,
			top: `${top}px`,
			width: '50px',
			height: '50px',
			position: 'relative',
			backgroundColor: 'red'
		}}/>
	)
}