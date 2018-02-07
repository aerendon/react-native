import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ArtistBox from './ArtistBox';

export default class App extends React.Component {

  render() {
    const artist = {
      image: 'http://images.coveralia.com/audio/d/David_Bowie-Best_Of_Bowie_(Special_Edition)-Frontal.jpg',
      name: 'David Bowie',
      likes: 200,
      comments: 140,
    }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
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
