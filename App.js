import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

var fullImage = {uri: 'https://facebook.github.io/react/img/logo_og.png'};


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            source={fullImage}
        />
        <Text>Где мой миллиард?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
