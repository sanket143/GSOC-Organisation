import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from "react-native";

class Seperator extends React.Component {
  render(){
    return(
      <View style={{
        height: 1,
        marginTop: 9,
        marginBottom: 9,
        backgroundColor: "#999"
      }}>
      </View>
    );
  }
}

export default class DescriptionTab extends React.Component {
  render(){
    return(
      <ScrollView
        style={{
          backgroundColor: "white"
        }}
      >
        <Text style={ styles.titleText }>{ this.props.navigation.state.params.name }</Text>
        <Seperator />
        <Text style={ styles.descriptionText }>{ this.props.navigation.state.params.description }</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    textAlign: "center",
    color: "#888",
    fontWeight: "bold"
  },
  descriptionText: {
    fontSize: 20
  }
})
