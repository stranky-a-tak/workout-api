import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Recent workouts</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: '1.5rem',
  },
  header: {
    fontSize: '1.75rem',
    fontWeight: '500',
    color: '#E0E0CE',
  }
});


export default Header;
