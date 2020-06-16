import React from "react";
import "./App.css";
import Mobile from "./components/mobileinput/mobileInput";
import Verify from "./components/verify/verify";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
    };
  }

onRouteChange = () => {
 let otp = prompt("Enter the OTP")

 if (Number(otp) === 1234) {
  this.setState({route:'home'})
  } else {
    return alert("Please Enter Correct Otp")
  }
}


  render() {
    return (
      <div className='tc'>

     


        {this.state.route === "signin" ? (
          <Mobile onRouteChange ={this.onRouteChange} />
        ) : (
          <div>
            <Verify />
          </div>
        )}
      </div>
    );
  }
}

export default App;
