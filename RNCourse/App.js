import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I love you</Text>
      <Text>Abeer</Text>
      <Button title='gooonr'/>
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
