import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { BlockProps } from '../../app/App';

const blockSize = '46px';

const StyledBlock = styled.div`
	width: ${blockSize};
	height: ${blockSize};
	position: absolute;
	background-color: red;
	border: 2px solid black;
`;

export default function Block(props: BlockProps): JSX.Element {

	const left = props.x * 50;
	const top = props.y * 50;

	return (
		<StyledBlock style={{
			left: `${left}px`,
			top: `${top}px`
		}}/>
	)
}