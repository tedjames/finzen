import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import Router from './router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCrpKwFbYnfcrN-tAM5h_5nbMmMfek6snc",
      authDomain: "saverly-77b52.firebaseapp.com",
      databaseURL: "https://saverly-77b52.firebaseio.com",
      storageBucket: "saverly-77b52.appspot.com",
      messagingSenderId: "499684505997"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
