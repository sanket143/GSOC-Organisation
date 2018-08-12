import React from "react";
import {
  Text
} from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import OverviewTab from "./DetailsTabs/OverviewTab";
import DescriptionTab from "./DetailsTabs/DescriptionTab";
import ContactTab from "./DetailsTabs/ContactTab";

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
  Contact: {
    screen: ContactTab,
    navigationOptions: {
      tabBarLabel: "Contact",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-contact-outline" color={ tintColor } size={24} />
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
  },
},
{
  shifting: true,
  initialRouteName: "Overview",
  order: ["Overview", "Description", "Contact"],
  activeTintColor: "orange",
  swipeEnabled: true,
  barStyle: {
    backgroundColor: "white"
  }
})
