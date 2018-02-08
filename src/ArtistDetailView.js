import React from 'react';
import { StyleSheet, View, ListView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ArtistBox from './ArtistBox';

export default class ArtistDetailView extends React.Component {
  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  }
});
