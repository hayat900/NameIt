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
        console.log("Input text is", message);

    }
    render() {

        return (
            <div><h1>Hello</h1><Header
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