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
      <View
        style={{
          backgroundColor: "white"
        }}>
        <ScrollView
          style={{
            backgroundColor: "white",
            marginRight: 10,
            marginLeft: 10
          }}
        >
          <Text style={ styles.titleText }>{ this.props.navigation.state.params.name }</Text>
          <Seperator />
          <Text style={ styles.descriptionText }>{ this.props.navigation.state.params.description }</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    marginTop: 10,
    textAlign: "center",
    color: "#888",
    fontWeight: "bold"
  },
  descriptionText: {
    fontSize: 20,
    color: "#555"
  }
})
