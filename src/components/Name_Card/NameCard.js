import React from 'react';
import './NameCard.css';
const namecheapurl = "https://www.namecheap.com/domains/registration/results/?domain=";
const Namecard = ({ suggestedName }) => {
    return (
        <a target="_blank" rel="noreferrer" className="card-link" href={`${namecheapurl}${suggestedName}`}>
            <div className="namecard">
                <p className="resultname">{suggestedName}</p>
            </div>
        </a>
    );
};
export default Namecard;