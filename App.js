import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.blue]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  }
});
