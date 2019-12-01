import React from 'react';
import ReactDOM from 'react-dom';

let star = <h1>{'\u2606'}</h1>
let starRepeat = R.repeat(star, 3)

ReactDOM.render(star, document.getElementById('root'))