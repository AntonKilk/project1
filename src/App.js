import React from 'react'


let Star = (props) => {
  
  if (props.isSelected){
    return <span
        style={{cursor: "pointer"}} 
        onClick={props.setRating}>
        &#9733;
      </span>
  } else {
    return <span
        style={{cursor: "pointer"}} 
        onClick={props.setRating}>
        &#9734;
      </span>
  }
}

class App extends React.Component {

  state = {
    value: 0
  }

  createStars(){
    let stars = []
    let maxRating = 3

    for (let i = 0; i < maxRating; i++){
      stars.push(
        <Star 
          key = {i}
          setRating = { () => this.setRating(i + 1)}
          isSelected = { this.state.value > i }
        />
      )
    } return stars
  }

  setRating(value) {
    this.setState({value})
  }

  render() {
    return <div>
        { this.createStars() } 
      </div>
  }
}

export default App