import { Component } from "react";
import './LoadScreen.css';

export default class LoadScreen extends Component {

    render() {

        setTimeout(function () {
            document.getElementById("content2").innerHTML = '';
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
                        Las locuras del emperador.
                    </div>
                </div>
            </div>

        );
    }
}

