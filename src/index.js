import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  // constructor function is particular of javascript lanaguage and not react.
  constructor(props) {
    super(props);//reference to the parent constructor function.
    this.state = { lat: null };//lat is abbreviated from latitude
  }

  // React need to define render !!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), (err) => console.log(err)
    );
    return <div>Latitude: {position.coords.latitude}</div>
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
)