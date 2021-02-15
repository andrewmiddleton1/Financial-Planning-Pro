import React from "react";
import tcaLogo from "../assets/images/tca.JPG";
import "./style.css";


const LandingJumbo = (props) => {

    return (
        <div className="jumbotron mt-5 landingJumbo">
            <div className='col-sm-8 mx-auto jumboText'>
                <h1 className='d-flex justify-content-center companyName'>
                    <div className="tcaLogo">
                        <img src={tcaLogo} alt="tcaLogo" className="responsive" />
                    </div>

                </h1>
                <h2 className='text-center companySlogan'>Financial Planning Update Portal</h2>
            </div>
        </div>
    );

}

export default LandingJumbo;