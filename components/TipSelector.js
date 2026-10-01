import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from './theme';

const OPTIONS = [0, 5, 10, 15, 20];

export default function TipSelector({ value, onChange }) {
  return (
    <View style={styles.row}>
      {OPTIONS.map((pct) => {
        const selected = pct === value;
        return (
          <Pressable
            key={pct}
            onPress={() => onChange(pct)}
            style={[styles.chip, selected && styles.chipSelected]}
            accessibilityRole="button"
            accessibilityState={{ selected }}
          >
            <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
              {pct}%
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8 },
  chip: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.line,
    alignItems: 'center',
  },
  chipSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 16, fontWeight: '600', color: colors.ink },
  chipTextSelected: { color: colors.mustard },
});
