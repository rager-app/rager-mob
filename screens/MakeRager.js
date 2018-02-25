import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

export default class MakeRagerScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Rager Name
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Location
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Date
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Rules
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Rager Description
        </Text>
      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 28,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
});
