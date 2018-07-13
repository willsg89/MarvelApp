import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Characters',
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.createFakeData();
  }

  createFakeData() {
    this.data = [];
    for (var i = 0; i < 50; i++) {
      this.data.push({
        id: i.toString(),
        name: `The quick brown ${i}`
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#A5060D"
          barStyle="light-content"
        />
        <FlatList
          data={this.data}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigate('Profile', {item: item});
            }}>
            <Image
              style={styles.characterImage}
              source={require('./mask.png')}
              // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text style={styles.characterName}>
              {item.name}
            </Text>
            <Image
              style={styles.indicator}
              source={require('./indicator.png')}
            />
          </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  characterName: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.87)',
    marginLeft: 8
  },
  characterImage: {
    width: 40,
    height: 40,
    marginLeft: 24
  },
  indicator: {
    height: 12,
    width: 8,
    position: 'absolute',
    right: 20
  },
  item: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: 1,
    left: 8
  }
});
