import React from 'react';
import { StyleSheet, View, ListView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ArtistList from './src/ArtistList';

export default class App extends React.Component {
  render() {
    const artist = {
      image: 'http://images.coveralia.com/audio/d/David_Bowie-Best_Of_Bowie_(Special_Edition)-Frontal.jpg',
      name: 'David Bowie',
      likes: 200,
      comments: 140,
    }
    const artists = Array(500).fill(artist);

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
