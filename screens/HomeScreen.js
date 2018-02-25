import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import AssetConnor from '../components/AssetConnor';
import AssetWoz from '../components/AssetWoz';
import AssetJulian from '../components/AssetJulian';
import { Card } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return  (
      <ScrollView style={{flex: 1}}>

         <View style={styles.container}>
           <Text style={styles.header}>
             Active Ragers
           </Text>
           <Card title="Woz's Dream Party">
             <AssetWoz />
           </Card>
         </View>

         <View style={styles.container}>
           <Card title="Cdids' dank Party">
             <AssetConnor />
           </Card>
         </View>

         <View style={styles.container}>
          <Card title="Jules' hot rager">
            <AssetJulian />
          </Card>
         </View>

       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
});
