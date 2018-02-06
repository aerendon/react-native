import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {

  render() {
    const image = 'http://images.coveralia.com/audio/d/David_Bowie-Best_Of_Bowie_(Special_Edition)-Frontal.jpg'
    const name = 'David Bowie'

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  }
});
