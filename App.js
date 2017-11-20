import React,{Component} from 'react';
import { View, Text,Button,Animated,Easing } from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

class  HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
      };
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
              <Text>Hello, Chat App!</Text>
              <Button
                onPress={() => navigate('Details',{ user: 'Lucy' })}
                title="Chat with Lucy"
              />
            </View>
        );
    }
}

class DetailsScreen extends Component{
    static navigationOptions = {
      headerRight: <Button title="Info" />,
    }
    render(){
        const { params } = this.props.navigation.state;
        debugger
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        );
    }
}


class RecentChatsScreen extends Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
const ModalNavigator = StackNavigator(
 {
   Main: { screen: HomeScreen },
   Details: { screen: DetailsScreen },
 },
 {
   headerMode: 'none',
   mode: 'modal',
   navigationOptions: {
     gesturesEnabled: false,
   },
   transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
       easing: Easing.out(Easing.poly(4)),
       timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { layout, position, scene } = sceneProps;
       const { index } = scene;

       const height = layout.initHeight;
       const translateY = position.interpolate({
         inputRange: [index - 1, index, index + 1],
         outputRange: [height, 0, 0],
       });

       const opacity = position.interpolate({
         inputRange: [index - 1, index - 0.99, index],
         outputRange: [0, 1, 1],
       });

       return { opacity, transform: [{ translateY }] };
     },
   }),
 }
);

export default ModalNavigator;
