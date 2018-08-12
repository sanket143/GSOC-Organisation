import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };


  render(){
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Button
          title="Go to the Details"
          onPress={() => {
            this.props.navigation.navigate("Details", {name: "Home Screen"})
          }}
        />
      </View>
    )
  }
}

export default HomeScreen;
