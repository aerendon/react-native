import React from 'react';
import { StyleSheet, View, ListView } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import HomeView from './src/HomeView';
import ArtistDetailView from './src/ArtistDetailView';

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false} />        
      </Scene>
    </Router>
  }
}
