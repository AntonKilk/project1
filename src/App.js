import React from 'react'

const R = require('ramda')
let n = 3 //number of stars

let star = <span style={{ cursor: "pointer"}}  onClick={(e) => handleClick(e)}>
{'\u2606'}    
</span>

let stars = R.repeat(star, n)

function handleClick(e) {
  if (e){
    stars.map(x => <span style={{ cursor: "pointer"}}>
    {'\u2605'}    
    </span> )
  }
  return stars
}

export default handleClick
