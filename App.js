import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Image
          style={{width:150, height: 150}}
          source={require('./assets/icon/design-logo-fix.png')} 
      />
      <Text style={{marginTop:100, fontFamily:'Roboto'}}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
