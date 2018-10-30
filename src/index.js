import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './redux/store'
import RouteMakerApp from './components/Main';
import './styles/styles.styl'

ReactDOM.render(<Provider store = {Store}><RouteMakerApp /></Provider>, document.getElementById('root'));
