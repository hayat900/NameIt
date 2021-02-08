import React from 'react';
import Namecard from '../Name_Card/NameCard';
import './Results.css';
import '../Name_Card/NameCard.js';
const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesjsx = suggestedNames.map(suggestedName => {
        return (<Namecard key={suggestedName} suggestedName={suggestedName} />)
    });
    return (
        <div className="results_container">
            {suggestedNamesjsx}
        </div>

    );
};
export default ResultsContainer;