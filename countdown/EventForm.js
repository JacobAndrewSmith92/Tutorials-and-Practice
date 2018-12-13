import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export default class EventForm extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }

}