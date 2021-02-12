import React from 'react';
import Home from '../Pages/Home.jsx'
import Meet from '../Pages/Meet.jsx'
import Contact from '../Pages/Contact.jsx'




export default function NavBar() {
    return (

        <div>

            <div className="container">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Reunión</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contacto</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> <Home/> </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> <Meet/> </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"> <Contact/> </div>
                </div>
            </div>

                
        </div>

    );
}


