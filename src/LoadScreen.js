import { Component } from "react";
import './LoadScreen.css';
import batLogo from './batlogo.png';

export default class LoadScreen extends Component {

    render() {

        setTimeout(function () {
            document.getElementById("content2").innerHTML = ``;
            document.getElementById("content3").classList.remove('content3Inv');
        }, 6000)

        return (
            <div id="content1">
                <div className="content2" id="content2">
                    <div className="Container" id="Container">
                        <div className="loadMessage">
                            <span className="loadText">Initialazing protocols <span className="dotsCase"><span className="dots">.</span><span className="dots">.</span><span className="dots">.</span></span></span>
                        </div>
                    </div>
                </div>
                <div className="content3 content3Inv" id="content3">
                    <div className="mainContainer">

                        <div className="columns" id="firstColumn">
                            <div className="options">
                                <p>Batmobil</p>
                            </div>
                            <div className="options">
                                <p>Batwing</p>
                            </div>
                            <div className="options">
                                <p>Batcave</p>
                            </div>
                        </div>

                        <div className="columns"  id="secondColumn">
                            <div className="batLogo">
                                <img src={batLogo}/>
                            </div>
                        </div>

                        <div className="columns"  id="thirsColumn">
                        <div className="options">
                                <p>Robin</p>
                            </div>
                            <div className="options">
                                <p>Oracle</p>
                            </div>
                            <div className="options">
                                <p>Alfred</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

