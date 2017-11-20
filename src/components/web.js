import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

export default function RepoView(props) {
  return (
    <View style={styles.container}>
      <WebView source={{uri: "https://github.com/jinxin479"}} />
    </View>
  );
}
