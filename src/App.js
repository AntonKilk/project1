import React from 'react';

const R = require('ramda');

let star = <span style={{ cursor: "pointer"}}  onClick={ChangeColor}>
    {'\u2606'}    
</span>

function ChangeColor() {
  star.prop={backgroundColor:"black"}
}

function Repeat() { 
let starRepeat = R.repeat(star, 3)

return starRepeat
}

export default Repeat
