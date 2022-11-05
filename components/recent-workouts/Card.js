import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <View style={styles.cardHeadingContainer}>
          <Text style={styles.cardHeading}>Upper</Text>
          <Text style={styles.cardTimeStamp}>25.01.2022</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D6D6B1',
    borderRadius: '0.8rem',
    width: '85%',
    paddingVertical: '1.2rem',
    paddingHorizontal: '1rem',
    marginBottom: '1.75rem'
  },
  cardHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardHeading: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#070C16',
  },
  cardTimeStamp: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#070C16',
  }
});

export default Card;