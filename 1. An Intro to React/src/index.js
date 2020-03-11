import React from 'react';
import ReactDOM from 'react-dom';
import { API_KEY } from '../API_KEY';

// const myKey = API_KEY;
console.log('API_KEY: ' + API_KEY);

// Create a new component. This component should produce some HTML.
const App = () => {
    return <div>API_KEY</div>;
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
