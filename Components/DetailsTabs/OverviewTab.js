import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import createTabNavigator from "react-navigation";

class TitleShow extends React.Component {
  static navigationOptions = {
    title: "Sanket"
  };

  render(){
    console.log(this.props.uri);
    return(
      <View style={{
        alignItems: "center"
      }}>
        <Image
          source={{ uri: ("https:" + this.props.uri)}}
          style={{
            height: 200,
            width: "100%",
            resizeMode: "contain"
          }}
        />
        <Text style={styles.orgTagLine}>{ this.props.tagline } </Text>
      </View>
    );
  }
}

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

class TagList extends React.Component {
  render(){
    return(
      <FlatList
        data={this.props.data}
        style={{
          marginBottom: 15,
        }}
        scrollEnabled={false}
        renderItem={({item}) => 
          <TouchableOpacity
            style={ styles.tagTouch }
          >
            <Text style={ styles.tagListItem }>{ item.trim() }</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

export default class OverviewTab extends React.Component {
  static navigationOptions = {
    title: "Sanket"
  }

  render(){
    return (
      <ScrollView style={{
        flex: 1,
        padding: 10, 
        backgroundColor: "#fff"
      }}>
        <TitleShow
          style={{
            alignItems: "center"
          }}
          uri={this.props.navigation.state.params.image_url}
          tagline={this.props.navigation.state.params.tagline}
        />
        <Text style={ styles.orgContentLabel }>TECHNOLOGIES</Text>
        <Seperator />
        <TagList data={ this.props.navigation.state.params.tech }/>
        <Text style={ styles.orgContentLabel }>TOPIC TAGS</Text>
        <Seperator />
        <TagList data={ this.props.navigation.state.params.topic }/>
        <Text style={ styles.orgContentLabel }>PROPOSAL TAGS</Text>
        <Seperator />
        <TagList data={ this.props.navigation.state.params.proposal }/>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  orgImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  orgContentLabel: {
    fontWeight: "bold",
    fontSize: 23,
  },
  orgTagLine: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#888",
    marginBottom: 10
  },
  tagListItem: {
    fontSize: 20,
    color: "#333",
  },
  tagTouch: {
    backgroundColor: "#fafafa",
    marginTop: 4,
    marginBottom: 4,
    padding: 5
  }
});
