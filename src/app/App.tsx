import React from 'react';

import T from 'features/pieces/T';
import Block from 'features/pieces/Block';

export interface BlockProps {
	x: number,
	y: number
}

export default function App() {

	const gameBlocks:BlockProps[] = [];
	gameBlocks[0] = { x: 0, y: 0 };
	gameBlocks[1] = { x: 3, y: 7 };

	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<div style={{overflow: 'hidden', width: '500px', height: '1000px', border: '2px solid black'}}>
				{gameBlocks.map((blockProps, i) => (
					<Block key={i} {...blockProps}/>
				))}
			</div>
		</div>
	);
}