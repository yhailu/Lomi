import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//create the Component
class Login extends Component {
  render(){
    return(
    <View style = {styles.container}>
      <Text>Login</Text>
    </View>
  );
  }
}

//define the style here :)
cont styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#2c3350'
  },
});
