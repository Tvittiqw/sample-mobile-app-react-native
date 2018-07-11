/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Store from './src/Store'
import {Provider} from 'react-redux'
import {AuthNavigator} from './src/navigation/navigation'

type Props = {};

class App extends Component<Props> {

  render() {
    return (
        <Provider store={Store}>
            <AuthNavigator/>
        </Provider>
    );
  }
}

export default App