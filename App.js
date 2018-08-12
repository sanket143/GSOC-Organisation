import React from 'react';
import {
  createStackNavigator
} from "react-navigation";
import { Text } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import DetailsScreen from "./Components/DetailsScreen";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen 
  },
  Details: {
    screen: DetailsScreen
  }    
},
{
  initialRouteName: "Home"
});

export default class App extends React.Component {
  render(){
    return <RootStack />
  }
}

