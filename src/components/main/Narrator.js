import React from 'react';

function Narrator(props)  {
	return (
		<div className={props.narratorClass} style={{height: `${props.dialogHeight}px`}}>
			<div className="text" style={{fontSize: `${props.fontSize}px`}}>{props.headline}</div>
		</div>
	);
}

export default Narrator;
