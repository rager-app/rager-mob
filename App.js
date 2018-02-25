import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import AssetExample from './components/AssetWoz';
import AssetConnor from './components/AssetConnor';
import { HomeScreen } from './screens'
import { MainTabNavigator } from './navigation'
import { Card } from 'react-native-elements'; // 0.19.0

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <View style={{flex: 1}}>
          <MainTabNavigator/>
        </View>
      );
    } else {
      return (
        <View style={styles.containerBackground}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('./assets/images/robot-dev.png'),
  //       require('./assets/images/robot-prod.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// export default class App extends Component<Props> {
//    render() {
//      return (
//        <View style={{flex: 1}}>
//          <View style={styles.container1}>
//            <Text style={styles.woz}>
//              Active Ragers
//            </Text>
//            <Card title="Woz's Dream Party">
//              <AssetExample />
//            </Card>
//          </View>
//
//          <View style={styles.container2}>
//            <Card title="Cdids' Wet Party">
//              <AssetConnor />
//            </Card>
//          </View>
//        </View>
//      );
//    }
//  }

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  container1: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   container2: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   woz: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
});
