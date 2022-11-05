import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CardContainer from './components/recent-workouts/CardContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CardContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#3F3F37',
    paddingTop: '4rem',
    paddingHorizontal: '1.5rem'
  }
});
