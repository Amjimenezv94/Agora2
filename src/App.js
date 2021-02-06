import React, {Component} from 'react';
import Login from './Components/Login.js';
import NavBar from './Components/NavBar.js'
import '../src/App.css'
import Footer from './Components/Footer.js'

class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <Login/>
        <Footer/>
      </div>
     
    );

  }
 
}

export default App;
