import React from "react";
import tcaLogo from "../assets/images/tca.JPG"


const LandingJumbo = (props) => {

    return (
        <div className="jumbotron mt-5 landingJumbo">
            <div className='col-sm-8 mx-auto jumboText'>
                <h1 className='d-flex justify-content-center companyName'>
                    <div>
                        <img src={tcaLogo} alt="tcaLogo" />
                    </div>

                </h1>
                <h2 className='text-center companySlogan'>Financial Planning Update Portal</h2>
            </div>
        </div>
    );

}

export default LandingJumbo;