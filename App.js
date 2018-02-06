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
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  box: {
    width: 150,
    height: 200,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    flex: 1,
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  }
});
