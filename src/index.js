import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';


class App extends React.Component {
  // constructor function is particular of javascript lanaguage and not react.
  constructor(props) {
    super(props);//reference to the parent constructor function.
    this.state = { lat: null, errorMessage: '' };//lat is abbreviated from latitude

   
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  
  // React need to define render !!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message='Please accept location request' />
  };
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)