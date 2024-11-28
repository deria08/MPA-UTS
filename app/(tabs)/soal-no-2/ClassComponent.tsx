import React, { Component } from 'react';
import { Text, View } from 'react-native';


class ClassComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, React Native!</Text>
      </View>
    );
  }
}

export default ClassComponent;
