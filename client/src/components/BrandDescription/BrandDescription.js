import React from "react";



const BrandDescription = (props) => {

    return (
        <div className="container-fluid d-flex justify-content-center p-0 m-0">
            <div className="row m-0 p-0">
                <div className="cardBackground card col-md-9 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">Welcome!</h5>
                        <p className="card-text">Please login if you are an existing client (and have the required login credentials) or register if you are a brand new client!.</p>
                    </div>
                </div>

                <div className="cardBackground card col-md-3 col-xs-12 text-center">
                    <div className="card-body">
                        <h5 className="card-title">Follow Us!</h5>
                        <a href="/">
                            <span className="fa-stack facebookLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack twitterLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack instagramLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack linkedinLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </span>
                        </a>
                        <a href="/">
                            <span className="fa-stack googleLogo">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="fab fa-google fa-stack-1x"></i>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default BrandDescription;