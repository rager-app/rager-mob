import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

export default class MakeRagerScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView
       style={styles.container}
       behavior="padding"
       >
      <View style={styles.container}>
        <Text style={styles.header}>
          Make a Rager
        </Text>
        <Text style={styles.paragraph}>
          Rager Name
        </Text>
        <TextInput
          style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => this.setState({text})}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Location
        </Text>
        <TextInput
          style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => this.setState({text})}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Date
        </Text>
        <TextInput
          style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => this.setState({text})}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Rules
        </Text>
        <TextInput
          style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          numberOfLines={2}
          onChangeText={(text) => this.setState({text})}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Rager Description
        </Text>
        <TextInput
          style={{height: 60, width: 350, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => this.setState({text})}
        />
      </View>
      </KeyboardAvoidingView>

      <Button style={{marginBottom: 20}} title="Make it!" color="#4286f4"/>

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
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
});
