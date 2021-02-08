import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../Search_Box/Search_box';

import ResultsContainer from '../Results/Results';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headerText: 'Name It!',//state is a key word,it has key value pair
        headerExpanded: true,
        suggestedNames: []
    };
    handleInputChange = (message) => {

        this.setState({
            headerExpanded: !message,
            suggestedNames: message ? name(message) : []
        });

    }
    render() {

        return (
            <div><p className="myclass">Ever wondered what name your project should have? Then you are at the right place...<br>
            </br>Type a keyword and we will help you get an ideal name for your project..
            <br></br>
            You will also know whether the domain of your selected name exists or not...</p><Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>

        );
    }
}

export default App;