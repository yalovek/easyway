import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { BarChart } from 'react-native-charts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  }
});


class Example extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <BarChart
        dataSets={[
          { 
            fillColor: '#46b3f7', 
            data: [
              { value: 15 },
              { value: 10 },
              { value: 12 },
              { value: 11 },
            ]
          },
          { 
            fillColor: '#3386b9', 
            data: [
              { value: 14 },
              { value: 11 },
              { value: 14 },
              { value: 13 },
            ]
          },
        ]}
        graduation={1}
        horizontal={false}
        showGrid={true}
        barSpacing={5}
        style={{
          height: 300,
          margin: 15,
        }}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('iqhack', () => Example);

