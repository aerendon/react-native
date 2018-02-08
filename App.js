import React from 'react';
import { StyleSheet, View, ListView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ArtistList from './src/ArtistList';
import { getArtists } from './src/api-client';

export default class App extends React.Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  }
});
