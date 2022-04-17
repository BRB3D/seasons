import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  // constructor function is particular of javascript lanaguage and not react.
  constructor(props) {
    super(props);//reference to the parent constructor function.
    this.state = { lat: null, errorMessage: '' };//lat is abbreviated from latitude

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React need to define render !!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
)