import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';

export default function PeoplePicker({ value, onChange }) {
  return (
    <View style={styles.row}>
      <Pressable
        onPress={() => onChange(Math.max(1, value - 1))}
        style={styles.button}
        accessibilityLabel="Remove a person"
      >
        <Text style={styles.buttonText}>−</Text>
      </Pressable>
      <Text style={styles.value}>
        {value} {value === 1 ? 'person' : 'people'}
      </Text>
      <Pressable
        onPress={() => onChange(Math.min(20, value + 1))}
        style={styles.button}
        accessibilityLabel="Add a person"
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: colors.mustard, fontSize: 24, fontWeight: '700' },
  value: { fontSize: 20, fontWeight: '600', color: colors.ink },
});
