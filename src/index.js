import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  // constructor function is particular of javascript lanaguage and not react.
  constructor(props) {
    super(props);//reference to the parent constructor function.
    this.state = { lat: null };//lat is abbreviated from latitude

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      }, (err) => console.log(err)
    );
  }

  // React need to define render !!
  render() {

    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
)