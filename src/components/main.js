import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
   Animated,
   Easing
} from 'react-native';

import { api } from './api';
import Dashboard from './dashboard';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: '',
          isLoading: false,
          error: false
        };
    }

    componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }
    render(){
         const animatedStyle = { height: this.animatedValue }
        return(
            <View style={styles.container}>
                 <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
  }
})
