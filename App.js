import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {

  render() {
    const image = 'http://images.coveralia.com/audio/d/David_Bowie-Best_Of_Bowie_(Special_Edition)-Frontal.jpg';
    const name = 'David Bowie';
    const likes = 200;
    const comments = 140;

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Ionicons name='ios-heart-outline' size={30} color='gray' />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Ionicons name='ios-chatboxes-outline' size={30} color='gray' />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    color: 'gray',
  }
});
