import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc00',
    justifyContent: 'center', // Pusatkan vertikal
    alignItems: 'center', // Pusatkan horizontal
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Home;
