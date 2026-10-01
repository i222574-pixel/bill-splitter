import { StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';

function money(n) {
  return n.toFixed(2);
}

export default function ResultPanel({ tip, total, perPerson }) {
  return (
    <View style={styles.panel}>
      <Text style={styles.label}>Each person pays</Text>
      <Text style={styles.big}>Rs {money(perPerson)}</Text>
      <View style={styles.divider} />
      <View style={styles.line}>
        <Text style={styles.small}>Tip</Text>
        <Text style={styles.small}>Rs {money(tip)}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.small}>Total with tip</Text>
        <Text style={styles.small}>Rs {money(total)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: { backgroundColor: colors.ink, borderRadius: 18, padding: 22 },
  label: { color: colors.mist, fontSize: 15 },
  big: { color: colors.mustard, fontSize: 44, fontWeight: '800', marginTop: 4 },
  divider: { height: 1, backgroundColor: colors.inkLine, marginVertical: 16 },
  line: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  small: { color: colors.paper, fontSize: 16 },
});
