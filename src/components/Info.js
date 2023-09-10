import React from "react";
import HASSANPhoto from "../images/hassan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";





export default function Info() {
return(
    <div className="info">
        <img className="info--photo" src={HASSANPhoto} alt="M HASSAN MALIK" />
        <h1 className="info--fullname">M HASSAN MALIK</h1>
        <h5 className="info--role">Junior Front End Developer</h5>
        <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.linkedin.com/in/hassan-malik-b875291bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          M HASSAN MALIK
        </a>
        </p>
        <div className="info--buttons">
            <address>
                <a href="mailto:hm51562@gmail.com">
                    {""}
                    <button className="button button--email">
                    <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
                    Email
                    </button>
                </a>
                </address>
                <a href="https://www.linkedin.com/in/hassan-malik-b875291bb/"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    <button className="button button--linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
                     LinkedIn
                    </button>
                 </a>
        </div>
    </div>
);
}