import axios from 'axios';
import React from 'react'

function Example() {

    // constructor(props) {
    //     super(props);
    //     // Don't do this!
    //     this.state = { color: props.color };
    // }

    axios({
        method: 'GET',
        url: ('https://pokeapi.co/api/v2/berry')
      })
      .then((response) => response.json())
      .then((results) => {
        console.log(results)
      })
      .catch(error => console.log('error', error));

  return (
    <div>Example</div>
  )
}

export default Example