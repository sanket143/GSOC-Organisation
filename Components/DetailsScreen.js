import React from "react";
import {
  Text
} from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import OverviewTab from "./DetailsTabs/OverviewTab";
import DescriptionTab from "./DetailsTabs/DescriptionTab";
/*
const DetailsTab = createBottomTabNavigator({
  Overview: {
    screen: OverviewTab
  },
  Description: {
    screen: DescriptionTab
  }
},
{
  initialRouteName: "Overview",
  swipeEnabled: true,
  lazy: false
});
*/


export default createMaterialBottomTabNavigator({
  Overview: {
    screen: OverviewTab,
    navigationOptions: {
      tabBarLabel: "Overview",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={ tintColor } size={24} />
      )
    }
  },
  Description: {
    screen: DescriptionTab,
    navigationOptions: {
      tabBarLabel: "Description",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-list" color={ tintColor } size={24} />
      )
    }
  }
},
{
  initialRouteName: "Overview",
  order: ["Overview", "Description"],
  activeTintColor: "orange",
  barStyle: {
    backgroundColor: "white"
  }
})
