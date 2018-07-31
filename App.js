import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

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
      <View style={{ flex: 1, padding: 10}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View
              style={styles.orgView}>
              <Image
                source={{ uri: ("https:" + item.image_url) }}
                style={styles.orgImage}
              />
              <Text style={styles.orgLabel}>{item.name} </Text>
            </View>}
            keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orgView: {
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
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
  }
});
