import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  createStackNavigator
} from "react-navigation";
import { Icon } from "native-base";
import Markdown from "react-native-markdown-renderer";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      modalOrg: null 
    }
  }

  static navigationOptions = {
    title: "GSOC Organisation"
  };

  getMore(url){
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.concat(responseJson.results)
        }, function(){
        })
        if(responseJson.next){
          this.getMore(responseJson.next);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount(){
    return fetch("https://summerofcode.withgoogle.com/api/program/current/organization/?page=1&page_size=48")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.results[0].image_url);
        this.getMore(responseJson.next);
        this.setState({
          isLoading: false,
          dataSource: responseJson.results
        }, function(){
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{ flex: 1, padding: 20, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <Modal
          visible={(this.state.modalOrg != null ? true : false)}
          onRequestClose={() => console.log("Hola")}
          presentationStyle="fullScreen"
          animationType="slide"
          style={{
            flex: 0,
            backgroundColor: "#e4e4e4"
          }}
        >
          <ScrollView
            style={{
              backgroundColor: "white",
              margin: 10,
            }}
          >
            <Text style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
              color: "#888"
            }}>
              INSTRUCTIONS
            </Text>
            <Markdown>{ this.state.modalContent }</Markdown>
            <Button onPress={() => {
              this.setState({
                modalOrg: null
              })
            }}
            title="Dismiss"/>
          </ScrollView>
        </Modal>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View>
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress = {() => {
                  this.props.navigation.navigate("Details", {
                    name: item.name,
                    image_url: item.image_url,
                    category: item.category,
                    tagline: item.tagline,
                    tech: item.technology_tags,
                    topic: item.topic_tags,
                    proposal: item.proposal_tags,
                    description: item.description
                  })
                }}
              >
                <View
                  style={styles.orgView}>
                  <Image
                    source={{ uri: ("https:" + item.image_url) }}
                    style={styles.orgImage}
                  />
                  <TouchableOpacity
                    style={styles.orgModalTouch}
                    onPress = {() => {
                      this.setState({
                        modalOrg: item.name,
                        modalContent: item.application_instructions
                      })
                    }}
                  >
                    <Text style={styles.orgLabel}>{item.name + " "}
                    <Icon
                      type="Ionicons"
                      name="information-circle"
                    />
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
            }
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orgView: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10
  },
  orgLabel: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  orgImage: {
    width: "100%",
    height: 250,
    resizeMode: "contain"
  },
  orgModalTouch: {
    borderStyle: "solid",
    borderTopColor: "#ccc",
    borderTopWidth: 1
  }
});
