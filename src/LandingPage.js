import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="up">
                        <div className="navbar pt-5 ">
                            <div className="logo">
                                <h1 className="text-white fw-normal">K. Griffith</h1>
                            </div>
                            <div className="uls">
                                <ul className="d-flex list-unstyled gap-4">
                                    <li><a className="text-decoration-none text-white" href="#">APPEARANCES</a></li>
                                    <li><a className="text-decoration-none text-white" href="#">BOOKS</a></li>
                                    <li><a className="text-decoration-none text-white" href="#">NEWS</a></li>
                                    <li><a className="text-decoration-none text-white" href="#">ABOUT</a></li>
                                    <li><a className="text-decoration-none text-white" href="#">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="info container">
                            <div className="row">
                                <div className="col-12  col-lg-6">
                                    <img className="m-5 p-5 " src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt=""/>
                                </div>
                                <div className="col-12 d-flex flex-column pb-5 justify-content-center  col-lg-6">
                                    <h1  className=" name display-2 fw-normal">Kayla Griffith</h1>
                                    <h3 className="text-white text-start">Award Winning Author</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-card">
                        <div className="container d-flex justify-content-center">
                            <div className="row w-75">
                                <div className="col-12 p-0 py-5 text-white col-lg-6">
                                    <h5 className="new-realise text-dark">New Realise</h5>
                                    <div className="p-5">
                                        <h1>
                                            The Swan Isle <br/>
                                            (2023)
                                        </h1>

                                        <p>
                                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                                        </p>

                                        <h6>
                                            Order Now
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <img className="img-fluid p-3" src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default LandingPage;