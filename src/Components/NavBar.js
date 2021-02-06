import React, { Component } from 'react';
import icon3 from '../assets/IMG/icon3.png'
import Home from '../views/Home.js'
import Meet from '../views/Meet.js'
import Contact from '../Components/Contact.js'


class NavBar extends Component {

    render() {
      return (

            <div>
              
                    <div className="container ">

                        <ul className="barra-navegacion nav fixed-top justify-content-center p-2" id="pills-tab" role="tablist"> 
                            <a className="py-2 mr-5 ml-4 float-left  " href="../views/Home.js" aria-label="Product">
                                <img src={icon3} className="" width="200" height="43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" alt="" />
                            </a>
                            <li className="nav-item  py-2 mt-2 mr-4 ml-5" >
                                <a className="navegacion active text-light " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <p>Inicio</p></a>
                            </li>
                            <li className="nav-item  py-2 mt-2 mr-4 ml-5" >
                                <a className="navegacion active text-light " id="pills-meet-tab" data-toggle="pill" href="#pills-meet" role="tab" aria-controls="pills-nosotros" aria-selected="true"> <p>Reunion</p></a>
                            </li>
                            <li className="nav-item  py-2 mt-2 mr-4 ml-5" >
                                <a className="navegacion active text-light " id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-nosotros" aria-selected="true"> <p>Contáctenos</p></a>
                            </li>
                        </ul>
                            
                         <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Home/></div>
                            <div className="tab-pane fade " id="pills-meet" role="tabpanel" aria-labelledby="pills-meet-tab"><Meet/></div>
                            <div className="tab-pane fade " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><Contact/></div>
                        </div>

                    </div>
                </div>
         
        );
    }
}

export default NavBar;