import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

var fullImage = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
              source={fullImage}
              style={{width: 193, height: 110}}
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
