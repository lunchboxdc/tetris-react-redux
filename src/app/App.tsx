import React from 'react';
import styled from 'styled-components';

import T from 'features/pieces/T';
import Block from 'features/pieces/Block';

export interface BlockProps {
	x: number,
	y: number
}

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const GameContainer = styled.div`
	overflow: hidden;
	position: relative;
	border: 2px solid black;
	background-color: black;
	width: 500px;
	height: 1000px;
`;

const getMinX = (piece:BlockProps[]):number => {
	return piece.reduce((min, p) =>
		p.x < min ? p.x : min, piece[0].x
	);
}

const getMaxX = (piece:BlockProps[]):number => {
	return piece.reduce((max, p) =>
		p.x > max ? p.x : max, piece[0].x
	);
}

export default function App() {

	const [fallingPiece, setFallingPiece] = React.useState<BlockProps[]>([
		{ x: 5, y: 0 },
		{ x: 5, y: 1 },
		{ x: 6, y: 1 },
		{ x: 6, y: 2 }
	]);

	document.onkeydown = function handleKeyPress(e) {
		if (e.key == 'ArrowDown') { // down
			const movedFallingPiece = [...fallingPiece];
			movedFallingPiece.map((piece, i) => {
				piece.y++;
			});
			setFallingPiece(movedFallingPiece);
		}
		else if (e.key == 'ArrowUp') { // right
			const movedFallingPiece = [...fallingPiece];
			movedFallingPiece.map((piece, i) => {
				piece.y--;
			});
			setFallingPiece(movedFallingPiece);
		}
		else if (e.key == 'ArrowLeft') { // left
			if (getMinX(fallingPiece) == 0) {
				return;
			}
			const movedFallingPiece = [...fallingPiece];
			movedFallingPiece.map((piece, i) => {
				piece.x--;
			});
			setFallingPiece(movedFallingPiece);
		}
		else if (e.key == 'ArrowRight') { // right
			if (getMaxX(fallingPiece) == 9) {
				return;
			}
			const movedFallingPiece = [...fallingPiece];
			movedFallingPiece.map((piece, i) => {
				piece.x++;
			});
			setFallingPiece(movedFallingPiece);
		}
		else if (e.key == '70') { // f

		}
	}


	const sittingBlocks:BlockProps[] = [];

	return (
		<MainContainer>
			<GameContainer>
				{fallingPiece.map((blockProps, i) => (
					<Block key={i} {...blockProps}/>
				))}
				{sittingBlocks.map((blockProps, i) => (
					<Block key={i} {...blockProps}/>
				))}
			</GameContainer>
		</MainContainer>
	);
}