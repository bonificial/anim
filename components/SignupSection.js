import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, Text, View} from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 45,
    height: 100,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: 10
  },
});
