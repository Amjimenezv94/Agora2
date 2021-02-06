import React, { Component } from 'react';
import icon3 from '../assets/IMG/icon3.png';
import '../assets/styles/login.css';

class Login extends Component {
    render() {
        return (

            <div className="container">
                <body className="text-center ">
                   <main className="form-singin">
                       <form >
                           <img className="mb-4" src={icon3} alt="" width="72" height="60"/>
                           <h1 className="h4 mb-3 fw-normal"> Incia sesión para ingresar a la asamblea</h1>
                           <label for= "inputUser" className="visually-hidden"> Usuario </label>
                           <input type="text" id="inputUser" className="form-control" placeholder="Usuario" required autoFocus/>
                           <br/>
                           <label for= "inputPassword" className="visually-hidden"> Contraseña </label>
                           <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required/>
                           <div>
                              <label>
                              <input type="checkbox" value="remember-me"/> Recordar 
                              </label> 
                           </div>
                           <button className="w-100 btn btn-lg btn-primary" type="submit">Inciar sesion</button>
                      
                      
                       </form>

                   </main>
                </body>

                    

      </div>   
        
    )
}

}

export default Login