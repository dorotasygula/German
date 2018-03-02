import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import CategoryList from './components/CategoryList';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
            <CategoryList />
            </div>
        );
    }
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});

