import React, { Component } from 'react';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class ProfileName extends Component {
  render() {
    return (
      <View style={styles.containerProfile}>
        <TextInput
        style={styles.ProfileInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerProfile: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ProfileInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 375,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }

});
