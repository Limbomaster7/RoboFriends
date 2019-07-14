import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import CardList from './components/cardList'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import {robots} from "./robots"
ReactDOM.render(<App />, document.getElementById('root'));






serviceWorker.unregister();
