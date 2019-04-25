import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Boiler Plate</h1>
                <p> We can use this template. We can customize it !</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));