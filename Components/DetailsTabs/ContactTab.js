import React from "react";

import {
  Text,
  View,
} from "react-native";

class Separator extends React.Component {
  render(){
    return(
      <View style={{
        height: 1,
        marginTop: 9,
        marginBottom: 9,
        backgroundColor: "#aaa"
      }}>
      </View>
    );
  }
}

export default class ContactTab extends React.Component {
  render(){
    return(
      <View
        style={{
          backgroundColor: "white"
        }}
      >
        <Text>{ this.props.navigation.state.params.precis }</Text>
      </View>
    );
  }
}
