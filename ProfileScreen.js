import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    const { name } = this.props.navigation.state.params.item;
    this.state = {
      name: name,
      colapse: true,
      desc: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!"
    };
    this.createFakeData();
  }

  createFakeData() {
    this.data = [];
    for (var i = 0; i < 50; i++) {
      this.data.push({
        id: i.toString(),
        name: `nomehj agsdjags dgadg agdjh sdga jhsgad jha sjhs asa sa ajhs a jh sa  sdasd a ${i}`
      });
    }
  }

  showHideDesc ()  {
    this.setState({
      colapse: !this.state.colapse
    })
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
        <FlatList
          data={this.data}
          style={styles.container}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <TouchableOpacity
                  style={styles.btBack}
                  onPress={() => {
                    goBack();
                  }}>
                <Image
                  style={styles.imageBack}
                  source={require('./back.png')}
                />
              </TouchableOpacity>
              <Image
                style={styles.characterImage}
                source={require('./mask.png')}
              />
              <Text style={styles.characterName}>
                { this.state.name }
              </Text>
              <Text 
                 numberOfLines={this.state.colapse? 3: null}
                 style={styles.characterDesc}>
                { this.state.desc }
              </Text>
              <TouchableOpacity
                  style={styles.btDown}
                  onPress={() => { this.showHideDesc() }}>
                <Image
                  style={styles.imageDown}
                  source={this.state.colapse? require('./bt-down.png'): require('./bt-up.png')}
                />
              </TouchableOpacity>
              <View style={styles.separator} />
              <Text style={styles.subtitle}>
                { 'Comics' }
              </Text>
            </View>
          }
          renderItem={({ item }) => (
          <View  style={styles.item}>
            <Image
              style={styles.comicImage}
              source={require('./cover.png')}
              // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text style={styles.comicDesc}>
              {item.name}
            </Text>
          </View>
          )}
        />
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  header: {
    alignItems: 'center'
  },
  characterImage: {
    marginTop: 24,
    width: 157,
    height: 157
  },
  comicImage: {
    width: 33,
    height: 51,
    marginLeft: 16
  },
  imageBack: {
    width: 16,
    height: 16
  },
  btBack: {
    position: 'absolute',
    left: 10,
    top: 11,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDown: {
    width: 12,
    height: 8
  },
  btDown: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterName: {
    fontFamily: 'BarlowCondensed-Bold',
    marginTop: 15,
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  },
  characterDesc: {
    fontFamily: 'BarlowCondensed-Regular',
    marginTop: 12,

    marginHorizontal: 16,
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 16
  },
  item: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16
  },
  comicDesc: {
    fontFamily: 'BarlowCondensed-Regular',
    marginLeft: 8,
    flex: 1,
    color: 'rgba(255, 255, 255, 0.87)',
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
  subtitle: {
    fontFamily: 'BarlowCondensed-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 5
  }
});
